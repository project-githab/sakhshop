import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', loadChildren: () => import('./wc-home/wc-home-module').then(m => m.WcHomeModule)
  },

  { path: 'cart', loadChildren: () => import('./wc-cart/wc-cart-module').then(m => m.WcCartModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
