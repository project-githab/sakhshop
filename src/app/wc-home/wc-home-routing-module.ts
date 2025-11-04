import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcHome } from './wc-home';
import {Home} from './home/home';

const routes: Routes = [
  { path: '', component: WcHome, children: [
    { path: '', component: Home }
    // { path: '', component: Home, data: {reuse: true} }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcHomeRoutingModule { }
