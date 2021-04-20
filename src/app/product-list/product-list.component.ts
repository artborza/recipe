import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Product } from '../models/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
  productItems:QueryList<ProductItemComponent>

  products:Product[]
  constructor() { 
    this.products =[];
    this.products.push({
      name:'ส้มโอ',
      price:990
    })
    this.products.push({
      name:'แตงโม',
      price:1000
    })
    this.products.push({
      name:'มะพร้าว',
      price:50
    })
  }

  ngOnInit(): void {}
  selectProduct(productComponent:ProductItemComponent){
    alert(`Product ${productComponent.product.name} selected`)
    this.productItems.forEach(p =>{
      p.isSelected =false
    });
    productComponent.isSelected = true
  }
}
