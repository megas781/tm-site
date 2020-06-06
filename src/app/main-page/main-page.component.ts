import {AfterViewInit, Component, OnInit, Output} from '@angular/core';
import {TweenLite, TimelineMax, TweenMax, TimelineLite} from 'gsap';
import Swiper from 'swiper';
import {ScrollMagic, Scene} from 'scrollmagiclib';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  // @Output() scrollController = new ScrollMagic.Controller();

  constructor() {
  }

  ngOnInit() {

  }




  ngAfterViewInit(): void {
    //анимации
    // new ScrollMagic.Scene({
    //   triggerElement: '.slogan-part__body',
    //   triggerHook: 0
    // })
    //   .setTween(TweenLite.from(document.querySelector('.slogan-part__body'), 1, {y: 50, opacity: 0}))
    //   .addTo(this.ctrl);


    // TweenLite.from(document.querySelector('.intro__image'), 3, {opacity: 0, scale: 0.9, delay: 1.0});
    // console.log('scrollmagic');

  }

}

