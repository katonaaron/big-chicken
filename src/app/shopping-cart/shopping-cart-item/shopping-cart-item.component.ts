import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartItemProduct} from '../shopping-cart-item-product.model';
import {ShoppingCartItemService} from '../shopping-cart-item.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() itemAndProduct: ShoppingCartItemProduct = null;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private shoppingCartItemService: ShoppingCartItemService) {
  }

  ngOnInit() {
  }

  onSelect(event: Event) {
    this.itemAndProduct.shoppingCartItem.quantity = +(event.target as HTMLInputElement).value;
    this.shoppingCartItemService.updateShoppingCartItem(this.itemAndProduct.shoppingCartItem).subscribe();
  }

  onDelete() {
    this.shoppingCartItemService.deleteShoppingCartItem(this.itemAndProduct.shoppingCartItem).subscribe();
  }
}
