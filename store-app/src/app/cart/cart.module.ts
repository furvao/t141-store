import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { SharedModule } from "../shared/shared.module";
import { CartService } from "./cart.service";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CartComponent],
  providers:[
    CartService
  ]
})
export class CartModule { }
