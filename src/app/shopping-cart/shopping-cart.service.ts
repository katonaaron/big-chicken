import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, forkJoin, Observable, of} from 'rxjs';
import {ShoppingCart} from './shopping-cart.model';
import {UserService} from '../user.service';
import {flatMap, map} from 'rxjs/operators';
import {ProductService} from '../products/product.service';
import {ShoppingCartItemProduct} from './shopping-cart-item-product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCart: Observable<ShoppingCart> = EMPTY;
  itemsAndProducts: Observable<ShoppingCartItemProduct[]> = EMPTY;
  numberOfProducts: Observable<number> = of(0);
  total: Observable<number> = of(0);

  constructor(private http: HttpClient,
              private userService: UserService,
              private productService: ProductService) {
    this.shoppingCart = this.userService.user
      .pipe(flatMap(
        (user) => {
          return this.getShoppingCartFromUrl(user._links.shoppingCart.href);
        }
      ));
    this.itemsAndProducts = this.getItemsAndProductsOfShoppingCart();
    this.total = this.calculateTotal();
    this.numberOfProducts = this.calculateNumberOfProducts();
  }

  public getShoppingCartFromUrl(url: string): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(url);
  }

  private getItemsAndProductsOfShoppingCart(): Observable<ShoppingCartItemProduct[]> {
    return this.shoppingCart
      .pipe(map(cart => cart._embedded.shoppingCartItems))
      .pipe(
        flatMap(
          (shoppingCartItems) => {
            return forkJoin(shoppingCartItems
              .map(
                (shoppingCartItem) => {
                  return this.productService.getProductFromUrl(shoppingCartItem._links.product.href)
                    .pipe(map(
                      (product) => {
                        const shoppingCartItemProduct = new ShoppingCartItemProduct();
                        shoppingCartItemProduct.shoppingCartItem = shoppingCartItem;
                        shoppingCartItemProduct.product = product;
                        return shoppingCartItemProduct;
                      }
                    ));
                }
              )
            );
          }
        )
      );
  }

  private calculateTotal(): Observable<number> {
    return this.itemsAndProducts
      .pipe(
        map((shoppingCartItemsAndProducts) => {
            return shoppingCartItemsAndProducts
              .map(shoppingCartItemAndProduct =>
                shoppingCartItemAndProduct.shoppingCartItem.quantity * shoppingCartItemAndProduct.product.price)
              .reduce(
                (a, b) => {
                  return a + b;
                }
              );
          }
        )
      );
  }

  private calculateNumberOfProducts(): Observable<number> {
    return this.itemsAndProducts
      .pipe(
        map((shoppingCartItemsAndProducts) => {
            return shoppingCartItemsAndProducts
              .map(shoppingCartItemAndProduct => shoppingCartItemAndProduct.shoppingCartItem.quantity)
              .reduce(
                (a, b) => {
                  return a + b;
                }
              );
          }
        )
      );
  }
}
