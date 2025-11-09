import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrategy implements PreloadingStrategy {

  readonly preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {

    if (route.data?.['preload'] === true && route.path) {

      // console.log(route.data?.['preload'])


      // add the route path to the preloaded module array
      // Добавить путь маршрута в предварительно загруженный массив модулей
      this.preloadedModules.push(route.path);

      return load();

    } else {

      return of(null);
    }
  }

}
