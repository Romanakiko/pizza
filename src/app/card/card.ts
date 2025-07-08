import {Component, input, signal} from '@angular/core';
import {Pizza} from '../pizza/pizza';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  pizza = input<Pizza | undefined>();
}
