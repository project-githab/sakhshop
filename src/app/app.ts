import {Component, DOCUMENT, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {

  /* Общее описание.

  Этот класс реализует корневой компонент Angular, который управляет отображением уведомления о cookies и обработкой cookies на сайте. Компонент проверяет, соглашается ли пользователь на использование cookies, и сохраняет это согласие в cookies. Если пользователь не согласен, отображается уведомление.*/

  /**
   * Включает или отключает блок об оповещении использование на сайте cookies
   * @protected
   */
  protected cookies: boolean = false;

  /**
   * Используется для уничтожения setTimeout после уничтожения компонента
   * @private
   */
  private timerId: any;

  /**
   *
   * @param cookieService Сервис для работы с cookies
   * @param renderer для добавления css стилей
   * @param document Для работы с dom элементами
   * @param platformId Для работы с dom элементами Для получения информации о платформе, чтобы знать, какая платформа используется, например браузер или сервер.
   */
  constructor(

    private cookieService: CookieService,

    private renderer: Renderer2,

    @Inject(DOCUMENT) private document: Document,

    @Inject(PLATFORM_ID) private platformId: Object

  ) { }


  /**
   * Метод вызывается при инициализации компонента
   */
  ngOnInit() {

    /**
     * Проверяем платформу
     */
    if (isPlatformBrowser(this.platformId)) {

      /**
       * Получаем cookie
       */
      const cookies = this.cookieService.get('shop');

      /**
       * Проверяем наличие cookie
       */
      if (cookies) {

        /**
         * Parsing в объект JSON
         */
        const jsonObject = JSON.parse(cookies);


        /**
         * Проверяем наличие accept_cookies. Если accept_cookies отсутствует или не ровно 1, тогда включаем уведомление об использование на сайте cookies
         */
        if (jsonObject.accept_cookies !== 1) {
          this.cookies = true;
        }


      } else {

        /**
         * Если cookies отсутствует при открытии страницы, то включаем уведомление об использование на сайте cookies
         */
        this.cookies = true;
      }

    }
  }

  /**
   * Метод вызывается, когда клиент нажимает кнопку ОК об оповещение об использовании cookie на сайт
   */
  okCookies() {

    /**
     * Получаем html элемента
     */
    const element: HTMLElement | null = this.document.getElementById("fadeBlock");


    /**
     * Проверяем наличие html элемента
     */
    if (element) {

      /**
       * Получаем cookies
       */
      const cookies = this.cookieService.get('shop');

      /**
       * Проверяем наличие cookies
       */
      if (cookies) {

        /**
         * Parsing в объект JSON
         */
        const jsonObject = JSON.parse(cookies);


        /**
         * Присваиваем в accept_cookies значение 1. Это означает что клиент нажал кнопку "Ок" на уведомлении об использовании на сайте cookies.
         * Если accept_cookies отсутствует, то он создастся.
         */
        jsonObject.accept_cookies = 1

        /**
         * Parsing JSON объект в строку
         */
        const stringCookies = JSON.stringify(jsonObject);

        /**
         * Установка зашифрованных cookies
         */
        this.cookieService.set('shop', stringCookies);

        /**
         * устанавливаем css class "fade-out" на node элемент
         */
        this.renderer.addClass(element, 'fade-out');

      } else {

        /**
         * Создаём Json
         */
        const newObject = {"accept_cookies": 1};

        /**
         * Конвертирует JSON объект в строку
         */
        const stringCookies = JSON.stringify(newObject);

        /**
         * Записывает в cookies
         */
        this.cookieService.set('shop', stringCookies);


        /**
         * Устанавливаем в дом элемент класс
         */
        this.renderer.addClass(element, 'fade-out');

        /**
         * Притормаживаем резкое удаление node из, дом дерева html документа блока информации об использовании cookies на сайте, так как в данном случае блок исчезает плавно, при помощи css свойств. Как только блок плавно исчез при помощи css свойств, удаляем node. Плавное исчезание происходит в течении 0.3 секунду, то-есть, в css свойства указано transition: opacity 0.3s ease-in-out;
         */
        this.timerId = setTimeout(() => {
          /**
           * Выключаем оповещение об использовании cookies на сайте
           */
          this.cookies = false;
        }, 300)

      }

    }
  }

  /**
   * Метод уничтожитель, уничтожает всё ненужное, избавляя от утечки памяти.
   */
  ngOnDestroy() {

    /**
     * При уничтожении компонента, уничтожаем setTimeout
     */
    clearTimeout(this.timerId);
  }


}
