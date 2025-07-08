import { Component } from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
