import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ProductCategoryCollection} from './product-category-collection.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductCategory} from './product-category.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private url = environment.ApiUrl + 'productCategories';
  categories$ = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getCategories();
  }

  public getCategories(): void {
    this.http
      .get<ProductCategoryCollection>(this.url)
      .pipe(map(categoryCollection => categoryCollection._embedded.productCategories))
      .subscribe(categories => this.categories$.next(categories));
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
