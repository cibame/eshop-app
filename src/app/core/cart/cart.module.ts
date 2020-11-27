import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CartIconComponent} from './cart-icon/cart-icon.component';
import {CartService} from './cart.service';
import { CartContentComponent } from './cart-content/cart-content.component';

@NgModule({
  declarations: [
    CartIconComponent,
    CartContentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CartService
  ],
  exports: [
    CartIconComponent,
    CartContentComponent
  ]
})
export class CartModule {
}
