import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LandingViewComponent} from './components/landing-view/landing-view.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ShopViewComponent} from './components/shop-view/shop-view.component';
import {AccountViewComponent} from './components/account-view/account-view.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from './components/footer/footer.component';
import {CartViewComponent} from './components/cart-view/cart-view.component';
import {LoginViewComponent} from './components/login-view/login-view.component';
import {ProductModalComponent} from './components/product-modal/product-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {UserLoginFormComponent} from './components/user-login-form/user-login-form.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    ProductCardComponent,
    ShopViewComponent,
    AccountViewComponent,
    FooterComponent,
    CartViewComponent,
    LoginViewComponent,
    ProductModalComponent,
    UserLoginFormComponent,
    UserRegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
