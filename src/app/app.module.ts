import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import {RouterModule,Routes} from '@angular/router';
import { MainContentComponentComponent } from './home/main-content-component/main-content-component.component';
import { NavBarComponentComponent } from './home/nav-bar-component/nav-bar-component.component';

const routes:Routes =[
  {
    path:'main',
    component:MainContentComponentComponent
  },
  {
    path:'nav',
    component:NavBarComponentComponent
  }

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    HomeModule, RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
