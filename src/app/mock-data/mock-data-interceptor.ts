import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {delay, of} from 'rxjs';
import {Pizza} from '../pizza/pizza';

export const MockDataInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.endsWith('/api/get-pizza-list') && req.method === 'GET') {
    return of(new HttpResponse({
      status: 200,
      body: mockPizza
    })).pipe(delay(300));
  }
  if (req.url.endsWith('/api/create-order') && req.method === 'POST') {
    return of(new HttpResponse({
      status: 201,
      body: req.body
    })).pipe(delay(300));
  }

  return next(req);
};


let mockPizza: Pizza[] = [
  {
    id: 'pizza_1',
    name: 'Мясная Делюкс',
    description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    image: '/mock-pizza/pizza_meat.png'
  },
  {
    id: 'pizza_2',
    name: 'Морская Премиум',
    description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    image: '/mock-pizza/pizza_premium.png'
  },
  {
    id: 'pizza_3',
    name: 'Бекон и Сосиски',
    description: 'Бекон, сыр, сосиски, ананас, томатная паста',
    image: '/mock-pizza/pizza_becon_sosages.png'
  },
  {
    id: 'pizza_4',
    name: 'Куриная Делюкс',
    description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    image: '/mock-pizza/pizza_chicken_deluxe.png'
  },
  {
    id: 'pizza_5',
    name: 'Барбекю Премиум',
    description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    image: '/mock-pizza/pizza_bbq_premium.png'
  },
  {
    id: 'pizza_6',
    name: 'Пепперони Дабл',
    description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    image: '/mock-pizza/pizza_peperoni_double.png'
  },
  {
    id: 'pizza_7',
    name: 'Куриное трио',
    description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    image: '/mock-pizza/pizza_chicken_trio.png'
  },
  {
    id: 'pizza_8',
    name: 'Сырная',
    description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    image: '/mock-pizza/pizza_cheese.png'
  }
]
