import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pizza} from './pizza';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private http = inject(HttpClient);
  $pizza: Observable<Pizza[]> = new Observable<Pizza[]>();

  constructor() {
    this.$pizza = this.getPizza();
  }

  private getPizza(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('/api/get-pizza-list');
  }
}
