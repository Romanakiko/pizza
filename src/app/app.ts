import {Component, inject} from '@angular/core';
import {Header} from './header/header';
import {AsyncPipe, NgTemplateOutlet} from '@angular/common';
import {Card} from './card/card';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MockDataInterceptor} from './mock-data/mock-data-interceptor';
import {PizzaService} from './pizza/pizza.service';
import {OrderForm} from './order-form/order-form';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    NgTemplateOutlet,
    Card,
    AsyncPipe,
    OrderForm
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private pizzaService = inject(PizzaService);

  $pizza = this.pizzaService.$pizza;
}
