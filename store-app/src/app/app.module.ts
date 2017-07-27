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

    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
