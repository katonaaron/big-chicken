import {ShoppingCartItemDTO} from './shopping-cart-item-dto.model';
import {Url} from '../shared/url.model';

export class ShoppingCartDTO {
  public '_embedded': {
    'shoppingCartItems': ShoppingCartItemDTO[]
  };
  public '_links': {
    'self': Url
  };

}
