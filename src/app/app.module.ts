import {registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {MainModule} from './children/main/main.module';
import {FooterComponent} from './core/component/footer/footer.component';
import {CoreModule} from './core/core.module';
import {WINDOW_PROVIDERS} from './core/service/window.provider';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);

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
  providers: [
    WINDOW_PROVIDERS,
    { provide: LOCALE_ID, useValue: 'it-IT' }
  ],
  bootstrap: [AppComponent],
  exports: [
    FooterComponent
  ]
})
export class AppModule {
}
