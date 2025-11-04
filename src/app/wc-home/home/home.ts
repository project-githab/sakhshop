import {ChangeDetectorRef, Component, Inject, inject, OnInit, PLATFORM_ID, REQUEST} from '@angular/core';
import {Products} from '../../_model/products';
import {ApiClient} from '../../_services/api-client';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  isProduct = true; // fixme todo Вернуть в false !!!!!!!!!!!!!!!! Это loading

  // Ту храним cookies и другие данный из заголовка запроса к приложению
  request: Request | null = inject(REQUEST);

  // Ту храним cookies
  sessionCookies: string | null | undefined = this.request?.headers.get('cookie')

  // тут храним список товаров
  private _products: Products[] = [];
  get products(): Products[] {
    return this._products;
  }

  set products(value: Products[]) {
    this._products = value;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any, private apiClient: ApiClient, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    // FIXME когда я перехожу например в корзину а потом обратно, то APP пытается сделать повторно запрос к серверу

    // if (isPlatformServer(this.platformId)) {
      this.apiClient.getProducts(this.sessionCookies).subscribe({
        next: data => {
          this.products = data.products;
          // this.cdr.detectChanges();
          this.isProduct = true; // fixme todo Вернуть в true !!!!!!!!!!!!!!!! Это loading
        }
      });
    // }


    // Делаем http запрос
    // this.apiClient.getProducts(this.sessionCookies).subscribe({
    //   next: data => {
    //     this.products = data.products;
    //
    //
    //     this.cdr.detectChanges();
    //
    //     this.isProduct = true;
    //
    //   }
    // });


  }

}
