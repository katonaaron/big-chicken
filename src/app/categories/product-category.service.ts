import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ProductCategoryCollection} from './product-category-collection.model';
import {Observable} from 'rxjs';
import {ProductCategory} from './product-category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private url = environment.ApiUrl + '/productCategories';

  constructor(private http: HttpClient) {
  }

  public getAllProductCategories(): Observable<ProductCategoryCollection> {
    return this.http
      .get<ProductCategoryCollection>(this.url);
  }

  public getProductCategoryFromUrl(url: string): Observable<ProductCategory> {
    return this.http
      .get<ProductCategory>(url);
  }

  public getProductCategoryByName(name: string): Observable<ProductCategory> {
    return this.http
      .get<ProductCategory>(this.url + '/search/findByName?name=' + name);
  }
}
