import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BackendService } from '../backend.service';



@NgModule({
  declarations: [ProductItemComponent,ProductListComponent],
  imports: [
    CommonModule
  ],
  providers: [BackendService],
  exports:[ProductItemComponent,ProductListComponent]

})
export class CatalogModule { }
