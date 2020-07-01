import {Component, OnInit} from '@angular/core';
import {TimelineLite, TweenLite} from 'gsap';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('header', [
      transition(':enter', animate('1.0s', keyframes([
        style({opacity: 0}),
        style({opacity: 1})
      ])))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  theWindow: Window;
  shouldHideMobileNav: boolean = true;

  ngOnInit() {
    this.theWindow = window;
    console.log('thewindow: ' + window);
  }

  burgerButtonTapped() {
    this.shouldHideMobileNav = false;
    let mobTimeline = new TimelineLite();
    let links = document.querySelectorAll('.nav *:not(:last-child)');
    const duration = 0.3;
    const positionConst = 0.02;
    for (let i = 1; i <= links.length; i++) {
      mobTimeline.add(TweenLite.from(`.nav > *:nth-child(${i})`, duration, {
        x: 100,
        opacity: 0
      }), positionConst * i);
    }
  }

  closeButtonTapped() {
    this.shouldHideMobileNav = true;

  }

}
