import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];
  errorMessage: string;
  listFilter: string;

  constructor(private _productservice: ProductsService) { }

  ngOnInit() {
    this._productservice.getProducts()
      .subscribe(
      products => this.products = products,
      error => this.errorMessage = <any>error);
  }

}
