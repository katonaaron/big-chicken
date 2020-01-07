import {Url} from '../shared/url.model';

export class ShoppingCartItemDTO {
  public 'quantity': number;
  public '_links': {
    'self': Url,
    'shoppingCartItem': Url,
    'user': Url,
    'product': Url
  };

  constructor(quantity: number, links: { self: Url; shoppingCartItem: Url; user: Url; product: Url }) {
    this.quantity = quantity;
    this._links = links;
  }
}
