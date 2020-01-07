import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartItem} from '../../../shopping-cart/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart-menu-item',
  templateUrl: './shopping-cart-menu-item.component.html',
  styleUrls: ['./shopping-cart-menu-item.component.css']
})
export class ShoppingCartMenuItemComponent implements OnInit {
  @Input() item: ShoppingCartItem = null;

  constructor() {
  }

  ngOnInit() {
  }

}
