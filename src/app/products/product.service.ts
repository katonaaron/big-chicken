import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ProductCollection} from './product-collection.model';
import {Observable} from 'rxjs';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = environment.ApiUrl + 'products';

  constructor(private http: HttpClient) {
  }

  public getAllProducts(): Observable<ProductCollection> {
    return this.getAllProductsFromUrl(this.url);
  }

  public getAllProductsFromUrl(url: string): Observable<ProductCollection> {
    return this.http
      .get<ProductCollection>(url);
  }

  public getProductFromUrl(url: string): Observable<Product> {
    return this.http
      .get<Product>(url);
  }

  public getProductByName(name: string): Observable<Product> {
    console.log(name, this.url);
    return this.http
      .get<Product>(this.url + '/search/findByName?name=' + name);
  }
}
