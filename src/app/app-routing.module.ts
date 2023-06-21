import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopViewComponent} from "./components/shop-view/shop-view.component";
import {LandingViewComponent} from "./components/landing-view/landing-view.component";
import {AccountViewComponent} from "./components/account-view/account-view.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {CartViewComponent} from "./components/cart-view/cart-view.component";

const routes: Routes = [
  { path: '', component: LandingViewComponent },
  { path: 'products', component: ProductCardComponent },
  { path: 'product', component: ProductCardComponent },
  { path: 'account', component: AccountViewComponent },
  { path: 'cart', component: CartViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
