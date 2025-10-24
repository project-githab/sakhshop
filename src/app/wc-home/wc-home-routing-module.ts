import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcHome } from './wc-home';
import {Home} from './home/home';

const routes: Routes = [
  { path: '', component: WcHome, children: [
    { path: '', component: Home }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcHomeRoutingModule { }
