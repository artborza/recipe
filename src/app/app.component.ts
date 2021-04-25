import { Component, ViewChild } from '@angular/core';
import { BackendService } from './backend.service';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';

  constructor(private backendService:BackendService){

  }

  @ViewChild(`productList`)
  productList: ProductListComponent

  ngOnInit():void{
    this.productList.products = this.backendService.getProducts();
  }
}
