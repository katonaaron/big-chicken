import {Component, OnInit} from '@angular/core';
import {ProductCategory} from '../categories/product-category.model';
import {ProductCategoryService} from '../categories/product-category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = false;
  productCategories: ProductCategory[] = [];

  constructor(private productCategoryService: ProductCategoryService) {
  }

  ngOnInit() {
    this.productCategoryService
      .getAllProductCategories()
      .subscribe(
        (productCategoryCollection) => {
          this.productCategories = productCategoryCollection._embedded.productCategories;
        }
      );
  }
}
