import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NumberOnlyDirective } from './number-only.directive';



@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective,
    NavBarComponent
    
   

  
  ],

  imports: [
    CommonModule,
    BrowserModule,
    ProductListComponent,
   

    

   
  ],
  bootstrap:[
    AppComponent
  ],
  
})
export class AppModule { }
