import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OrderDetailComponent} from './children/order-detail/order-detail.component';
import {OrderComponent} from './order.component';
import {OrderResolve} from './order.resolve';

const routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: ':uuid',
        component: OrderDetailComponent,
        resolve: {
          order: OrderResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [OrderResolve],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
