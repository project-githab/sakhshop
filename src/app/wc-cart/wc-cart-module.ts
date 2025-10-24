import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcCartRoutingModule } from './wc-cart-routing-module';
import { WcCart } from './wc-cart';
import { Cart } from './cart/cart';
import {CHeader} from '../c-header/c-header';
import {CFooter} from '../c-footer/c-footer';


@NgModule({
  declarations: [
    WcCart,
    Cart
  ],
  imports: [
    CommonModule,
    WcCartRoutingModule,
    CHeader,
    CFooter
  ]
})
export class WcCartModule { }
