import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartItemProduct} from '../shopping-cart-item-product.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() itemAndProduct: ShoppingCartItemProduct = null;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
  }

  ngOnInit() {
  }

}
