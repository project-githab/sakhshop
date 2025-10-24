import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Common {

  private obSideBar = new Subject<void>();
  toggleBar = this.obSideBar.asObservable();

  toggleSidebar() {
    this.obSideBar.next();
  }



  private obSideBarM = new Subject<string>();
  toggleBarM = this.obSideBarM.asObservable();

  toggleSidebarM(value: string) {
    this.obSideBarM.next(value);
  }

}
