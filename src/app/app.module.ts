import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {MainModule} from './children/main/main.module';
import {FooterComponent} from './core/component/footer/footer.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MainModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FooterComponent
  ]
})
export class AppModule {
}
