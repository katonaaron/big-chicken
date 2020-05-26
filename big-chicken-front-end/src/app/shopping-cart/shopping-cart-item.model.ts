import {Product} from '../products/product.model';
import {ShoppingCartItemDTO} from './shopping-cart-item-dto.model';
import {Url} from '../shared/url.model';

export class ShoppingCartItem extends ShoppingCartItemDTO {
  public product: Product;

  constructor(quantity: number, links: { self: Url; shoppingCartItem: Url; user: Url; product: Url }, product: Product) {
    super(quantity, links);
    this.product = product;
  }
}
