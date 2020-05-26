import {Url} from '../shared/url.model';

export class Product {
  public 'imagePath': string;
  public 'name': string;
  public 'ingredients': string;
  public 'price': number;
  public 'barcode': string;
  '_links': {
    'self': Url,
    'product': Url,
    'category': Url
  };
}
