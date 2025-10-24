import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[burgerRotateZ]',
})
export class Burger {

  constructor(private el: ElementRef) { }


  /*
     Выезжающая панель CSideBar.
     1. c-side-bar.component.html, SideBarComponent, HeaderComponent
  */

  // Это стиль поворота
  @HostBinding('class.rotateZ')
  isActive1 = false

  // Это стиль тени
  @HostBinding('class.shadow-burger')
  isActive2 = false

  @HostListener('click')
  onClick() {
    console.log('click');
    this.isActive1 = !this.isActive1;
    this.isActive2 = !this.isActive2;
  }

  @HostListener('document:click', ['$event.target'])
  handleClick(targetElement: EventTarget | null) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    const clickedSpecificElement = (targetElement as HTMLElement).id ==='sidebar';




    if (!clickedInside || clickedSpecificElement) {
      this.isActive1 = clickedSpecificElement; // boolean
      this.isActive2 = clickedSpecificElement; // boolean
    }


  }


}
