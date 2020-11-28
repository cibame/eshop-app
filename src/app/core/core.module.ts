import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FooterComponent} from './component/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    FooterComponent
  ]
})
export class CoreModule {
}
