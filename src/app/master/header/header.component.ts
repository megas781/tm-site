import { Component, OnInit } from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('header',[

      transition(':enter', animate('1.0s', keyframes([
        style({opacity: 0}),
        style({opacity: 1})
      ])))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  theWindow: Window;
  shouldHideMobileNav: boolean = true;
  ngOnInit() {
    this.theWindow = window;
    console.log('thewindow: ' + window);
  }

  burgerButtonTapped() {
    this.shouldHideMobileNav = !this.shouldHideMobileNav;
  }

}
