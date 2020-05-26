import {Url} from '../shared/url.model';

export class ProductCategory {
  public imagePath: string;
  public name: string;
  // tslint:disable-next-line:variable-name
  public _links: {
    self: Url,
    productCategory: Url,
    'products': Url
  };

}
