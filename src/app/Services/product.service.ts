import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Shared Classes and types/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  _url="/assets/Data/Products.json";
  getAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this._url);
  }

  getProductById(prdId: number):any
  {
    // let prodList = this.getAllProducts();
    // if(isNaN(prdId)){
    //   return null;
    // }
    // for (const p of prodList) {
    //   if(p.ID==prdId) {
    //     return p;
    //   }
    // }
    return null;
  }
}
