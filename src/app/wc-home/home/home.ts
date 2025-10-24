import {ChangeDetectorRef, Component, inject, OnInit, REQUEST} from '@angular/core';
import {Products} from '../../_model/products';
import {ApiClient} from '../../_services/api-client';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  isProduct = false;

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

  constructor(private apiClient: ApiClient, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    // Делаем http запрос
    this.apiClient.getProducts(this.sessionCookies).subscribe({
      next: data => {
        this.products = data.products;
        this.cdr.detectChanges();

        this.isProduct = true;

      }
    });


  }

}
