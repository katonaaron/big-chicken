import {Url} from './shared/url.model';

export class User {
  public '_links': {
    'self': Url,
    'user': Url,
    'shoppingCart': Url
  };
}
