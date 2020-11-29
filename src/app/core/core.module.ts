import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './component/footer/footer.component';
import {HeaderComponent} from './component/header/header.component';
import {SummaryComponent} from './component/summary/summary.component';

@NgModule({
  declarations: [
    FooterComponent,
    SummaryComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [
    FooterComponent,
    SummaryComponent,
    HeaderComponent,
    RouterModule
  ]
})
export class CoreModule {
}
