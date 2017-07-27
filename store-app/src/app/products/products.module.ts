import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';


import { SharedModule } from "../shared/shared.module";
import { ProductFilterPipe } from "./product.pipe";
import { ProductsService } from "./products.service";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductsComponent, ProductFilterPipe],
  exports:[ProductsComponent],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
