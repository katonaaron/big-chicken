import {ProductCategory} from './product-category.model';
import {Url} from '../shared/url.model';

export class ProductCategoryCollection {
  // tslint:disable-next-line:variable-name
  public _embedded: {
    productCategories: ProductCategory[]
  };
  // tslint:disable-next-line:variable-name
  public _links: {
    self: Url,
    profile: Url
  };
  public page: {
    'size': number,
    'totalElements': number,
    'totalPages': number,
    'number': number
  };
}
