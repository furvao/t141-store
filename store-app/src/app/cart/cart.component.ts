import { Component, OnInit } from '@angular/core';
import { CartService } from "./cart.service";
import { IProduct } from "../products/product";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: IProduct[];
  totalValue: number = 0;
  itemPrice: number = 0;

  constructor(private _cartService: CartService,private _router: Router) { }

  loadProductsOnChart() : void{
    this.products = this._cartService.listProductsOnCart();
    this.totalValue = 0;
    if (this.products) {
      this.products.forEach((p) => this.itemPrice = (p.price * p.orderQtd));
      this.products.forEach((p) => this.totalValue += this.itemPrice);
    }
  }

  ngOnInit() {

    this.loadProductsOnChart();
  }

  addOrderQtd(product: IProduct) : void {
    product.orderQtd = product.orderQtd + 1;
    this._cartService.addProductOnCart(product);
    this.loadProductsOnChart();
  }

  removeOrderQtd(product: IProduct) : void {
    product.orderQtd = product.orderQtd - 1;
    if(product.orderQtd === 0){
      console.log('delete')
      this._cartService.deleteProductOnCart(product);
    } else {
      this._cartService.addProductOnCart(product);
    }
    this.loadProductsOnChart();
  }

  doOrder():void{
    this._router.navigate(['/users/login']);
  }

}
