import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-menu',
  templateUrl: './shopping-cart-menu.component.html',
  styleUrls: ['./shopping-cart-menu.component.css']
})
export class ShoppingCartMenuComponent implements OnInit {
  collapsed = true;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

}
