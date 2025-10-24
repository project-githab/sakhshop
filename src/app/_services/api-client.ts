import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiClient {

  private httpProtocol: string = environment.httpProtocol;
  private domain: string = environment.domain;
  private home: string = "/sapi/home"

  homePath: string = this.httpProtocol + this.domain + this.home;

  constructor(private http: HttpClient) {
  }

  // Серверный запрос/ Получение списка товаров е=для главное страницы
  public getProducts(cookies: string | null | undefined): Observable<any> {
    const headers = new HttpHeaders({
      'Cookie': cookies || ''
    });
    return this.http.get<any>(this.homePath,
      { headers, withCredentials: true});
  }

}
