import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import {TermsOfServiceComponent} from './terms-of-service/terms-of-service.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {AuthenticatedMenuComponent} from './header/authenticated-menu/authenticated-menu.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {CategoriesComponent} from './categories/categories.component';
import {CategoriesListComponent} from './categories/categories-list/categories-list.component';
import {CategoriesListItemComponent} from './categories/categories-list/categories-list-item/categories-list-item.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryComponent} from './categories/category/category.component';
import {ProductsComponent} from './products/products.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductListItemComponent} from './products/product-list/product-list-item/product-list-item.component';
import {ProductComponent} from './products/product/product.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInSuccessUrl: 'http://localhost:4200/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/tos',
  privacyPolicyUrl: '/privacy',
  // credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
    LoginComponent,
    AuthenticatedMenuComponent,
    DropdownDirective,
    CategoriesComponent,
    CategoriesListComponent,
    CategoriesListItemComponent,
    CategoryComponent,
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
