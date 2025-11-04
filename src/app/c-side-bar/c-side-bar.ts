import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Common} from '../_shared/common';

@Component({
  selector: 'app-c-side-bar',
  imports: [],
  templateUrl: './c-side-bar.html',
  styleUrl: './c-side-bar.css',
})
export class CSideBar implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  constructor(private gService: Common) {
  }


  ngOnInit() {

    this.subscription = this.gService.toggleBar.subscribe(() => {
      this.toggleSidebar()
    });

    this.subscription = this.gService.toggleBarM.subscribe((value) => {
      this.toggleSidebarM(value)
    });


  }


  isOpen = false;
  isOpenM = false;

  /*Закрываем или открываем список категорий в desktop версии. Туда-сюда*/
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleSidebarM(value :string) {

    /*Закрываем или открываем список категорий. Туда-сюда*/
    if (value === "l") {
      this.isOpenM = !this.isOpenM;
    }

    /*Закрываем список категорий в мобильной версии*/
    if (value === "h") {
      this.isOpenM = false;
    }

  }


  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    const sidebar3 = document.getElementById('sidebar');
    const burger = document.getElementById('burger');
    if (this.isOpen && !burger!.contains(target) && !sidebar3!.contains(target)) {
      this.isOpen = false
    }

  }

  ngOnDestroy() {
    // Предотвратить утечку памяти при уничтожении компонента
    this.subscription.unsubscribe();
  }

}
