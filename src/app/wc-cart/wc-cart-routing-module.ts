import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcCart } from './wc-cart';
import {Cart} from './cart/cart';

const routes: Routes = [
  { path: '', component: WcCart, children: [
    { path: '', component: Cart },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcCartRoutingModule { }
