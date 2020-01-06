import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartItemProduct} from '../../../shopping-cart/shopping-cart-item-product.model';

@Component({
  selector: 'app-shopping-cart-menu-item',
  templateUrl: './shopping-cart-menu-item.component.html',
  styleUrls: ['./shopping-cart-menu-item.component.css']
})
export class ShoppingCartMenuItemComponent implements OnInit {
  @Input() itemAndProduct: ShoppingCartItemProduct = null;

  constructor() {
  }

  ngOnInit() {
  }

}
