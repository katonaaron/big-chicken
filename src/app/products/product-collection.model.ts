import {Product} from './product.model';
import {Url} from '../shared/url.model';

export class ProductCollection {
  public '_embedded': {
    'products': Product[]
  };
  public '_links': {
    'self': Url,
    'profile': Url
  };
  public 'page': {
    'size': number,
    'totalElements': number,
    'totalPages': number,
    'number': number
  };
}
