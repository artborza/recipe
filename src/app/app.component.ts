import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';

  @ViewChild(`productList`)
  productList: ProductListComponent

  ngOnInit():void{
    this.productList.products =[
      {
        name:'ส้มโอ',
        price:111
      },
      {
        name:'แตงโม',
        price:222
      },
      {
        name:'มะพร้าวว',
        price:333
      }
      
  ]
  }
}
