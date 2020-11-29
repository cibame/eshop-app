import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CoreModule} from '../../core/core.module';
import {OrderDetailComponent} from './children/order-detail/order-detail.component';
import {OrderComponent} from './order.component';
import {OrderRoutingModule} from './order.routing';

@NgModule({
  declarations: [OrderComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    CoreModule,
    OrderRoutingModule
  ]
})
export class OrderModule {
}
