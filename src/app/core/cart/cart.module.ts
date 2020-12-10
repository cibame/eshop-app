import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CartContentComponent} from './cart-content/cart-content.component';
import {CartIconComponent} from './cart-icon/cart-icon.component';

@NgModule({
  declarations: [
    CartIconComponent,
    CartContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartIconComponent,
    CartContentComponent
  ]
})
export class CartModule {
}
