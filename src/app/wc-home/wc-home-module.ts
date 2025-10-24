import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcHomeRoutingModule } from './wc-home-routing-module';
import { WcHome } from './wc-home';
import { Home } from './home/home';
import {CHeader} from '../c-header/c-header';
import {CFooter} from '../c-footer/c-footer';
import {CPagination} from '../c-pagination/c-pagination';
import {CLoading} from '../c-loading/c-loading';


@NgModule({
  declarations: [
    WcHome,
    Home
  ],
  imports: [
    CommonModule,
    WcHomeRoutingModule,
    CHeader,
    CFooter,
    CPagination,
    CLoading
  ]
})
export class WcHomeModule { }
