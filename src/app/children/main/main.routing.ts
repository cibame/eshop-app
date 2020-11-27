import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CheckoutComponent} from './children/checkout/checkout.component';
import { HomeComponent } from './children/home/home.component';
import {MainComponent} from './main.component';

const routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
