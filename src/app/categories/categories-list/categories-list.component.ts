import {Component, OnInit} from '@angular/core';
import {ProductCategoryService} from '../product-category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor(private productCategoryService: ProductCategoryService) {
  }

  ngOnInit() {
  }

}
