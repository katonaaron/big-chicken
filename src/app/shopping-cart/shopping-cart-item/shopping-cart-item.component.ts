import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartItem} from '../shopping-cart-item.model';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() item: ShoppingCartItem = null;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  onDelete() {
    this.shoppingCartService.deleteItem(this.item);
  }

  onChange(newQuantity: number) {
    this.item.quantity = +newQuantity;
    this.shoppingCartService.updateItem(this.item);
  }
}
