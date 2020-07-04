import {Component, OnInit} from '@angular/core';
import {TimelineLite, TweenLite} from 'gsap';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {NavigationEnd, Router} from '@angular/router';

const duration = '0.18s';
const transactionIn = transition('hidden => shown', animate(duration));
const transactionOut = transition('shown => hidden', animate(duration));

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [

    trigger('header', [
      transition(':enter', animate('0.8s', keyframes([
        style({opacity: 0}),
        style({opacity: 1})
      ])))
    ]),
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
    trigger('nav', [
      state('desktop', style({
        visibility: 'visible',
        opacity: 1,
      })),
      state('mobileHidden', style({
        visibility: 'hidden',
        opacity: 0
      })),
      state('mobileVisible', style({
        visibility: 'visible',
        opacity: 1
      })),
      transition('mobileHidden => desktop', []),
      transition('mobileVisible => desktop', []),
      transition('mobileHidden => mobileVisible', animate(duration)),
      transition('mobileVisible => mobileHidden', animate(duration))
    ])
  ]
})

export class HeaderComponent implements OnInit {

  theWindow: Window;
  // shouldShowMobileView: boolean = false;
  navState = '';

  //костыль
  currentPath = '';
  imageLogoState = '';
  textLogoState = '';

  constructor(private router: Router) {
  }

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

    document.querySelectorAll('.nav-link').forEach(function(linkElement) {
      linkElement.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'auto'});
        if (self.navState == 'mobileVisible') {
          self.navState = 'mobileHidden';
        }
      });
    });

    let onResize = () => {
      // console.log('onResize from: ' + this.navState);
      if (window.innerWidth > 870) {
        this.navState = 'desktop';
      } else {
        if (this.navState === '') {
          //Первичная настройка
          this.navState = 'mobileHidden';
        } else if (this.navState == 'desktop') {
          this.navState = 'mobileHidden'
        } else if (this.navState == 'mobileVisible') {
          //ничего не меняем
        }
      }
      // console.log(`onResize after: ${this.navState}`);
    }
    onResize();
    window.addEventListener('resize', onResize);
  }

  onBurgerButtonClicked() {
    // this.shouldShowMobileView = true;
    this.navState = 'mobileVisible';
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
    // this.shouldShowMobileView = false;
    // console.log(`from: ${this.navState}`);
    this.navState = 'mobileHidden';
  }

}
