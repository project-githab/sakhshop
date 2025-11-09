import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomPreloadStrategy} from './_custom/custom-preload-strategy';

const routes: Routes = [

  {
    path: '', loadChildren: () => import('./wc-home/wc-home-module').then(m => m.WcHomeModule),
    data: {preload: true}
  },

  {
    path: 'cart', loadChildren: () => import('./wc-cart/wc-cart-module').then(m => m.WcCartModule),
    data: {preload: true}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
