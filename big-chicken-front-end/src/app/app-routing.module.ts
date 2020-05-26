import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {TermsOfServiceComponent} from './terms-of-service/terms-of-service.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {LoginComponent} from './login/login.component';
import {CategoryComponent} from './categories/category/category.component';
import {ProductComponent} from './products/product/product.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tos', component: TermsOfServiceComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},
  {path: 'category/:name', component: CategoryComponent},
  {path: 'product/:name', component: ProductComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
