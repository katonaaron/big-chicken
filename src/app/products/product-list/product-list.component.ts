import {Component, Input, OnChanges} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {ProductCategory} from '../../categories/product-category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  @Input() productCategory: ProductCategory = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnChanges() {
    this.productService.getAllProductsFromUrl(this.productCategory._links.products.href)
      .subscribe((productCollection) => {
        this.products = productCollection._embedded.products;
      });
  }

}
