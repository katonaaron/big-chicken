import {Component, OnInit} from '@angular/core';
import {ProductCategory} from '../product-category.model';
import {ProductCategoryService} from '../product-category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  productCategory: ProductCategory = null;

  constructor(private productCategoryService: ProductCategoryService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.productCategoryService.getProductCategoryByName(params.name)
          .subscribe(
            (productCategory) => {
              this.productCategory = productCategory;
            },
            () => {
              this.router.navigate(['/not-found']);
            }
          );
      }
    );
  }

}
