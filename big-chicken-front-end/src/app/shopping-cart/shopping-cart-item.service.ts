import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user.model';
import {Product} from '../products/product.model';
import {environment} from '../../environments/environment';
import {ShoppingCartItemDTO} from './shopping-cart-item-dto.model';
import {map} from 'rxjs/operators';
import {ShoppingCartItem} from './shopping-cart-item.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartItemService {
  private url = environment.ApiUrl + 'shoppingCartItems';

  constructor(private http: HttpClient) {
  }

  public createItem(user: User, product: Product): Observable<ShoppingCartItem> {
    return this.http
      .post<ShoppingCartItemDTO>(this.url, {
        quantity: 1,
        product: product._links.self.href,
        user: user._links.self.href
      })
      .pipe(map(item => new ShoppingCartItem(item.quantity, item._links, product)));
  }

  public updateItem(shoppingCartItem: ShoppingCartItem): Observable<ShoppingCartItem> {
    return this.http
      .patch<ShoppingCartItemDTO>(shoppingCartItem._links.self.href, {
        quantity: shoppingCartItem.quantity,
        // product: shoppingCartItem.product._links.self.href,
        // user: shoppingCartItem._links.user.href
      })
      .pipe(map(item => new ShoppingCartItem(item.quantity, item._links, shoppingCartItem.product)));
  }
}
