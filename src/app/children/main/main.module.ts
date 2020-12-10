import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CartModule} from '../../core/cart/cart.module';
import {CoreModule} from '../../core/core.module';
import {ProductListComponent} from './children/home/components/product-list/product-list.component';
import {HomeComponent} from './children/home/home.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {PanelComponent} from './component/panel/panel.component';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main.routing';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
    ProductListComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
    MainRoutingModule,
    CartModule
  ]
})
export class MainModule {
}
