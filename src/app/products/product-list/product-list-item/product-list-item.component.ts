import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {ShoppingCartItemService} from '../../../shopping-cart/shopping-cart-item.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product = null;

  constructor(private shoppingCartItemService: ShoppingCartItemService) {
  }

  ngOnInit() {
  }

  onAddToCart() {
    this.shoppingCartItemService.createOrUpdateShoppingCartItem(this.product);
  }
}
