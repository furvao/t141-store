import { Injectable } from "@angular/core";
import {Http, Response} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProduct } from "./product";

@Injectable()
export class ProductsService{

    private _productsUrl = './assets/products/products.json';

    constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]>{

        return this._http.get(this._productsUrl)
                .map((response: Response) => <IProduct[]>response.json())
                .do(data => console.log('All: ' +JSON.stringify(data)))
                .catch(this.handleError);
        
    }

    getProduct(code: string): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.code === code));
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}