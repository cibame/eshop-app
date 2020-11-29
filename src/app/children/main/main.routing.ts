import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './children/home/home.component';
import {OrderComponent} from '../order/order.component';
import {OrderResolve} from '../order/order.resolve';
import {MainComponent} from './main.component';

const routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    OrderResolve
  ]
})
export class MainRoutingModule {
}
