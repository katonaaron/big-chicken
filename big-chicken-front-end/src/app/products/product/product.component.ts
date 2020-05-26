import {Component, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductCategory} from '../../categories/product-category.model';
import {ProductCategoryService} from '../../categories/product-category.service';
import {ShoppingCartService} from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = null;
  productCategory: ProductCategory = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private productCategoryService: ProductCategoryService,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.productService.getProductByName(params.name)
          .subscribe(
            (product) => {
              this.product = product;
              this.productCategoryService.getProductCategoryFromUrl(product._links.category.href)
                .subscribe((productCategory) => {
                  this.productCategory = productCategory;
                });
            },
            () => {
              this.router.navigate(['/not-found']);
            }
          );
      }
    );
  }

  onAddToCart() {
    this.shoppingCartService.addProduct(this.product);
  }
}
