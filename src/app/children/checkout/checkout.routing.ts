import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CheckoutComponent} from './checkout.component';
import {CheckoutGuard} from './checkout.guard';
import {InformationComponent} from './children/information/information.component';

const routes = [
  {
    path: '',
    component: CheckoutComponent,
    canActivate: [CheckoutGuard],
    children: [
      {
        path: '',
        component: InformationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CheckoutGuard]
})
export class CheckoutRoutingModule {
}
