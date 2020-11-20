import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CartModule} from '../../core/cart/cart.module';
import { ProductListComponent } from './children/home/components/product-list/product-list.component';
import { HomeComponent } from './children/home/home.component';
import {FooterComponent} from './component/footer/footer.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {MainComponent} from './main.component';
import { MainRoutingModule } from './main.routing';
import { PanelComponent } from './component/panel/panel.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    CartModule
  ],
})
export class MainModule {}
