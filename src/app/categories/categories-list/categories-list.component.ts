import {Component, OnInit} from '@angular/core';
import {ProductCategoryService} from '../product-category.service';
import {ProductCategory} from '../product-category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  productCategories: ProductCategory[] = [];

  constructor(private productCategoryService: ProductCategoryService) {
  }

  ngOnInit() {
    this.productCategoryService
      .getAllProductCategories()
      .subscribe((productCategoryCollection) => {
        this.productCategories = productCategoryCollection._embedded.productCategories;
      });
  }

}
