import {Component, DoCheck, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Common} from '../_shared/common';
import {CSideBar} from '../c-side-bar/c-side-bar';
import {Burger} from '../_directives/side-bar/burger';

@Component({
  selector: 'app-c-header',
  imports: [
    FormsModule,
    NgStyle,
    CSideBar,
    Burger,
    NgOptimizedImage
  ],
  templateUrl: './c-header.html',
  styleUrl: './c-header.css',
})
export class CHeader implements OnInit, DoCheck {


  private route = inject(ActivatedRoute);
  private router = inject(Router);


  /**
   * Показывает или скрывает кнопку очистить на поле ввода input search
   */
  isVisible = false;

  /**
   * Минимальное количество вводимых символов в input search
   */
  inputMin: number = 3;

  /**
   * Максимальное количество вводимых символов в input search
   */
  inputMax: number = 100;

  /**
   * Данный из input search
   */
  valueInput: string = "";


  isActiveButtonHome: boolean = false;
  isActiveButtonList: boolean = false;
  isActiveButtonCart: boolean = false;

  constructor(private common: Common) {
  }

  ngOnInit(): void {

    this.router.url;
    if (this.router.url === "/") {
      this.isActiveButtonHome = true;
    }
    if (this.router.url === "/cart") {
      this.isActiveButtonCart = true;
    }


  }

  openListCategories() {

    this.isActiveButtonList = !this.isActiveButtonList;

    if (this.router.url === "/") {
      this.isActiveButtonHome = !this.isActiveButtonHome;
    }

    if (this.router.url === "/cart") {
      this.isActiveButtonCart = !this.isActiveButtonCart;
    }

    /*Закрываем или открываем список категорий. Туда-сюда*/
    this.common.toggleSidebarM("l")
  }

  goHome() {
    this.isActiveButtonHome = true;
    this.isActiveButtonList = false;

    /*Закрываем список категорий в мобильной версии*/
    this.common.toggleSidebarM("h")

    this.router.navigate(['/']).then(() => {});
  }

  goCart() {

    this.isActiveButtonCart = true;
    this.isActiveButtonList = false;

    /*Закрываем список категорий в мобильной версии*/
    this.common.toggleSidebarM("h")

    /*Если нахожусь на странице /cart то, не инициализируем кнопку перехода на эту-же страницу, а то получается "cart/cart" */
    // if (this.router.url !== "/cart") {
      this.router.navigate(['cart']).then(() => {});
    // }


  }

  /**
   * Метод очистки input search от данных
   */
  clearInputSearch(): void {

    /**
     * Очищает input search от данных
     */
    this.valueInput = "";
  }

  /**
   * Отображает sidebar
   */
  toggleSidebar() {
    this.common.toggleSidebar()
  }





  /**
   * Метод инициализируется когда происходят какие-то изменения, в данном случаи это в Input
   */
  ngDoCheck(): void {

    /**
     * Проверяем есть ли данные в input search. Если пусто, то {@link isVisible} true и кнопка для очистки input search исчезает. Если не пусто, то {@link isVisible} принимает значение false и кнопка для очистки input search появляется.
     */
    this.isVisible = this.valueInput === "";

  }


}
