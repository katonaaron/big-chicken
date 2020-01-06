import {ShoppingCartItem} from './shopping-cart-item.model';
import {Url} from '../shared/url.model';

export class ShoppingCart {
  public '_embedded': {
    'shoppingCartItems': ShoppingCartItem[]
  };
  public '_links': {
    'self': Url
  };

}
