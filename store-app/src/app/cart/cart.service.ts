import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProduct } from "../products/product";

@Injectable()
export class CartService {

  list: IProduct[];
  DB_KEY: string = 'cart';
  NEW = 1;
  UPDATE = 2;

  constructor(private _http: Http) { }

  addProductOnCart(product: IProduct): void {
    
    this.list = this.unserializeAndParse();
    let index = this.getIndex(product);

    if (index > -1) {
      this.list[index] = product;
      console.log(this.list[index].orderQtd)
      
    } else {
      product.orderQtd = 1;
      this.list.push(product);
    }
    this.serializeAndSave();
  }

  listProductsOnCart() {
    this.list = this.unserializeAndParse();
    if (this.list && this.list.length > 0) {
      return this.list;
    }
    return null;
  }

  getProductOnCart(product): IProduct {
    this.list = this.unserializeAndParse();
    let index = this.getIndex(product);

    if (index > -1) {
      let subscriber = this.list[index];
      return subscriber;
    }

    return null;
  }

  deleteProductOnCart(product) {
    this.list = this.unserializeAndParse();
    let index = this.getIndex(product);

    if (index > -1) {
      this.list.splice(index, 1);
      
    }
    this.serializeAndSave();
  }

  getIndex(product): number {
    this.list = this.unserializeAndParse();
    let item: IProduct;

    for (var i = 0; i < this.list.length; i++) {
      item = this.list[i];
      if (item.code == product.code) {
        return i;
      }
    }

    return -1;
  }
  serializeAndSave(): void {
    let list = this.list;
    if (list) {
      let json = JSON.stringify(this.list);
      console.log(json);
      window.localStorage.setItem(this.DB_KEY, json);
    }
  }

  unserializeAndParse(): IProduct[] {
    let json = window.localStorage.getItem(this.DB_KEY);
    if (json) {
      this.list = JSON.parse(json);
    } else {
      this.list = [];
    }
    return this.list;
  }

}