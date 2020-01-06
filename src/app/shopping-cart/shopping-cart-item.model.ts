import {Url} from '../shared/url.model';

export class ShoppingCartItem {
  public 'quantity': number;
  public '_links': {
    'self': Url,
    'shoppingCartItem': Url,
    'user': Url,
    'product': Url
  };
}
