import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CheckoutComponent} from './checkout.component';
import {InformationComponent} from './children/information/information.component';

const routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: '',
        component: InformationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CheckoutRoutingModule {
}
