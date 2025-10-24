import {NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {BrowserModule, provideClientHydration, withEventReplay} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing-module';
import {App} from './app';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {CHeader} from './c-header/c-header';
import {CFooter} from './c-footer/c-footer';
import {CPagination} from './c-pagination/c-pagination';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CHeader,
    CFooter,
    CPagination
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
  ],
  exports: [
  ],
  bootstrap: [App]
})
export class AppModule { }
