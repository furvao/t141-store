import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from "../shared/shared.module";
import { ProductsModule } from "../products/products.module";

@NgModule({
  imports: [
    SharedModule,
    ProductsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
