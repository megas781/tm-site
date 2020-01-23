import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TweenLite, TimelineMax, TweenMax, TimelineLite} from 'gsap';

// import * as ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
// import 'script-loader!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }


  // ctrl = new ScrollMagic.Controller();

  ngAfterViewInit(): void {
    //анимации
    // new ScrollMagic.Scene({
    //   triggerElement: '.slogan-part__body',
    //   triggerHook: 0
    // })
    //   .setTween(TweenLite.from(document.querySelector('.slogan-part__body'), 1, {y: 50, opacity: 0}))
    //   .addTo(this.ctrl);


    TweenLite.from(document.querySelector('.intro__image'), 3, {opacity: 0, scale: 0.9, delay: 1.0});
    console.log('scrollmagic');

  }

}
