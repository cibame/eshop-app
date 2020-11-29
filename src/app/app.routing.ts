import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./children/main/main.module').then((m) => m.MainModule)
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./children/checkout/checkout.module').then((m) => m.CheckoutModule)
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./children/order/order.module').then((m) => m.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {
}
