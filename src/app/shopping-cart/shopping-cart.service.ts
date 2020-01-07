import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, forkJoin, Observable, of} from 'rxjs';
import {UserService} from '../user.service';
import {ProductService} from '../products/product.service';
import {ShoppingCartDTO} from './shopping-cart-dto.model';
import {User} from '../user.model';
import {map, mergeMap, switchMap, take, tap} from 'rxjs/operators';
import {ShoppingCartItemDTO} from './shopping-cart-item-dto.model';
import {Product} from '../products/product.model';
import {ShoppingCartItem} from './shopping-cart-item.model';
import {ShoppingCartItemService} from './shopping-cart-item.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items$ = new BehaviorSubject<ShoppingCartItem[]>([]);
  total$ = new BehaviorSubject<number>(0);
  count$ = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient,
              private userService: UserService,
              private productService: ProductService,
              private shoppingCartItemService: ShoppingCartItemService,
              private router: Router) {
    this.getCartItems();
    this.calculateTotal();
    this.calculateCount();
  }

  public addProduct(product: Product): void {
    this.userService.user.subscribe(user => {
      if (!user) {
        this.router.navigate(['/login'], {queryParams: {returnUrl: this.router.url}});
      }
    });
    this.items$
      .pipe(take<ShoppingCartItem[]>(1))
      .pipe(switchMap(
        (items) => {
          const index = items.findIndex(item => item.product._links.self.href === product._links.self.href);
          if (index !== -1) {
            items[index].quantity++;
            return this.shoppingCartItemService.updateItem(items[index]).pipe(map(() => items));
          } else {
            return this.userService.user
              .pipe(mergeMap(
                (user) => {
                  if (user) {
                    return this.shoppingCartItemService.createItem(user, product).pipe(
                      map(item => [...items, item])
                    );
                  } else {
                    return of<ShoppingCartItem[]>([]);
                  }
                }
              ));
          }
        }
      ))
      .subscribe(items => this.items$.next(items));
  }

  public deleteItem(item: ShoppingCartItem): void {
    this.items$.pipe(
      take(1),
      switchMap(items => this.http.delete(item._links.self.href).pipe(
        tap(() => items.splice(items.indexOf(item), 1)),
        map(() => items)
      ))
    ).subscribe(items => this.items$.next(items));
  }

  public updateItem(item: ShoppingCartItem): void {
    this.items$.pipe(
      take(1),
      switchMap(items => this.shoppingCartItemService.updateItem(item).pipe(
        tap(() => items[items.indexOf(item)] = item),
        map(() => items)
      ))
    ).subscribe(items => this.items$.next(items));
  }

  private getCartItems() {
    return this.userService.user
      .pipe(mergeMap(
        (user) => {
          if (user) {
            return this.getItemsAndProducts(user);
          } else {
            return of<ShoppingCartItem[]>([]);
          }
        }
      ))
      .subscribe(items => this.items$.next(items));
  }

  private getItemsAndProducts(user: User): Observable<ShoppingCartItem[]> {
    return this.getItemsOfUser(user)
      .pipe(
        mergeMap(
          (items) => {
            return this.getProductsOfCartItems(items)
              .pipe(map(products => products.map(
                (product, i) => {
                  return new ShoppingCartItem(items[i].quantity, items[i]._links, product);
                }
              )));
          }
        ),
      );
  }

  private getItemsOfUser(user: User): Observable<ShoppingCartItemDTO[]> {
    return this.http
      .get<ShoppingCartDTO>(user._links.shoppingCart.href)
      .pipe(map(cart => cart._embedded.shoppingCartItems));
  }

  private getProductsOfCartItems(cartItems: ShoppingCartItemDTO[]): Observable<Product[]> {
    return forkJoin(cartItems
      .map(item => this.productService.getProductFromUrl(item._links.product.href))
    );
  }

  private calculateTotal() {
    this.items$.pipe(
      map(items => items.length === 0 ? 0 : items.map(item => item.quantity * item.product.price).reduce((a, b) => a + b))
    ).subscribe(total => this.total$.next(total));
  }

  private calculateCount() {
    this.items$.pipe(
      map(items => items.length === 0 ? 0 : items.map(item => item.quantity).reduce((a, b) => a + b))
    ).subscribe(total => this.count$.next(total));
  }
}
