import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from './order';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private http = inject(HttpClient);

  constructor() { }

  createOrder(order: Order) {
    return this.http.post<Order>('/api/create-order', order);
  }
}
