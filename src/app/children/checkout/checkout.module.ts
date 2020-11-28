import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {CartModule} from '../../core/cart/cart.module';
import {CoreModule} from '../../core/core.module';
import {CheckoutComponent} from './checkout.component';
import {CheckoutGuard} from './checkout.guard';
import {CheckoutRoutingModule} from './checkout.routing';
import {DeliveryFormComponent} from './children/information/component/delivery-form/delivery-form.component';
import {PickupFormComponent} from './children/information/component/pickup-form/pickup-form.component';
import {InformationComponent} from './children/information/information.component';
import {PaymentComponent} from './children/payment/payment.component';
import {ShippingComponent} from './children/shipping/shipping.component';
import {SummaryComponent} from './component/summary/summary.component';
import { HeaderComponent } from './component/header/header.component';
import { PickupComponent } from './children/pickup/pickup.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    InformationComponent,
    ShippingComponent,
    PaymentComponent,
    SummaryComponent,
    PickupFormComponent,
    DeliveryFormComponent,
    HeaderComponent,
    PickupComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    CheckoutRoutingModule,
    HttpClientModule,
    CartModule,
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CheckoutModule {
}
