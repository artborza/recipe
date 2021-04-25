import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  products:Product[];
  constructor() { }

  getProducts(): Product[]{
  
    this.products =[
      {
        name:'ส้มโอ',
        price:111
      },
      {
        name:'แตงโม',
        price:222
      },
      {
        name:'มะนาว',
        price:153
      },
      {
        name:'มะพร้าวว',
        price:333
      }
      
  ]
    return this.products;
  }

  getProductById(ProductId:number):Product{
    return ;
  }
}
