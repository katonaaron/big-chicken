import {Url} from '../shared/url.model';

export class Product {
  public 'imagePath': string;
  public 'name': string;
  '_links': {
    'self': Url,
    'product': Url,
    'category': Url
  };
}
