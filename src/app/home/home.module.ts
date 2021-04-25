import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { MainContentComponentComponent } from './main-content-component/main-content-component.component';



@NgModule({
  declarations: [NavBarComponentComponent, MainContentComponentComponent],
  imports: [CommonModule],
  exports:[NavBarComponentComponent,MainContentComponentComponent]
})
export class HomeModule { }
