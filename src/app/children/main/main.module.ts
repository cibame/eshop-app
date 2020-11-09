import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './children/home/components/product-list/product-list.component';
import { HomeComponent } from './children/home/home.component';
import { MainRoutingModule } from './main.routing';

@NgModule({
  declarations: [HomeComponent, ProductListComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
