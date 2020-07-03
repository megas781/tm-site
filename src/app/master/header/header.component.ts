import {Component, OnInit} from '@angular/core';
import {TimelineLite, TweenLite} from 'gsap';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {NavigationEnd, Router} from '@angular/router';

const duration = '0.3s linear'
const transactionIn = transition('hidden => shown', animate(duration));
const transactionOut = transition('shown => hidden', animate(duration));
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [



    trigger('image-logo', [
      transactionIn,
      transactionOut,
      state('shown', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0,
      })),
    ]),
    trigger('text-logo', [
      transactionIn,
      transactionOut,
      state('shown', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0,
      })),
    ]),

    trigger('header', [
      transition(':enter', animate('0.8s', keyframes([
        style({opacity: 0}),
        style({opacity: 1})
      ])))
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  theWindow: Window;
  shouldHideMobileNav: boolean = true;

  //костыль
  currentPath = '';
  imageLogoState = '';
  textLogoState = '';

  constructor(private router: Router) {}

  ngOnInit() {

    this.theWindow = window;
    let self = this;
    this.router.events.subscribe(function(value) {
      if (value['url'] != undefined && value != null && value['url'] != undefined && value['url'] != null) {
        self.currentPath = String(value['url']);
        if (value instanceof NavigationEnd) {
          if (self.currentPath == '/') {
            self.imageLogoState = 'shown';
            self.textLogoState = 'hidden';
          } else {
            self.imageLogoState = 'hidden';
            self.textLogoState = 'shown';
          }
        }
      }
    });
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
