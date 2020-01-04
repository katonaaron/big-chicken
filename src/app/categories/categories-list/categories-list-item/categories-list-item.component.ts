import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from '../../product-category.model';

@Component({
  selector: 'app-categories-list-item',
  templateUrl: './categories-list-item.component.html',
  styleUrls: ['./categories-list-item.component.css']
})
export class CategoriesListItemComponent implements OnInit {
  @Input() productCategory: ProductCategory = null;

  constructor() {
  }

  ngOnInit() {
  }

}
