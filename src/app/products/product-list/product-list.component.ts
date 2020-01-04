import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {ProductCategory} from '../../categories/product-category.model';
import {Observable} from 'rxjs';
import {ProductCollection} from '../product-collection.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productCategory: ProductCategory = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    let observable: Observable<ProductCollection>;
    if (this.productCategory) {
      observable = this.productService.getAllProductsFromUrl(this.productCategory._links.products.href);
    } else {
      observable = this.productService.getAllProducts();
    }
    observable.subscribe((productCollection) => {
      this.products = productCollection._embedded.products;
    });
  }

}
