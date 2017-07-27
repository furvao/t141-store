import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeModule } from "./home/home.module";
import { FooterModule } from "./footer/footer.module";

import { HomeComponent } from "./home/home.component";
import { ProductsModule } from "./products/products.module";
import { ProductsComponent } from "./products/products.component";
import { CartModule } from "./cart/cart.module";
import { CartComponent } from "./cart/cart.component";
import { UsersModule } from "./users/users.module";
import { UsersComponent } from "./users/users.component";
import { LoginComponent } from "./users/login/login.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    FooterModule,
    ProductsModule,
    CartModule,
    UsersModule,

    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'users', component: UsersComponent },
      { path: 'login', component: LoginComponent },
      
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
