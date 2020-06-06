import {AfterViewInit, Component, OnInit, Output} from '@angular/core';
import {TweenLite, TimelineLite} from 'gsap';
import Swiper from 'swiper';
import {ScrollMagic, Scene} from 'scrollmagiclib';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  ctrl: ScrollMagic;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

    this.ctrl = new ScrollMagic('body');

    //анимации
    // new ScrollMagic.Scene({
    //   triggerElement: '.slogan-part__body',
    //   triggerHook: 0
    // })
    //   .setTween(TweenLite.from(document.querySelector('.slogan-part__body'), 1, {y: 50, opacity: 0}))
    //   .addTo(this.scrollController);
    //
    //
    // TweenLite.from(document.querySelector('.intro__image'), 3, {opacity: 0, scale: 0.9, delay: 1.0});
    // console.log('scrollmagic');

    const scene = new Scene(window.innerHeight * 2 + 400, -200, '.awards-section', '1', true);

    const silhouetteMoveLength = 50;
    const tweenTopLeft = TweenLite.fromTo('.decoration-silhouette.top-left', 1, {
      x: silhouetteMoveLength,
      y: -silhouetteMoveLength
    }, {x: -silhouetteMoveLength, y: silhouetteMoveLength, ease: 'linear'});
    const tweenBottomLeft = TweenLite.fromTo('.decoration-silhouette.bottom-left', 1, {
      x: -silhouetteMoveLength,
      y: -silhouetteMoveLength
    }, {x: silhouetteMoveLength, y: silhouetteMoveLength, ease: 'linear'});
    const tweenBottomRight = TweenLite.fromTo('.decoration-silhouette.bottom-right', 1, {
      x: -silhouetteMoveLength,
      y: silhouetteMoveLength
    }, {x: silhouetteMoveLength, y: -silhouetteMoveLength, ease: 'linear'});
    const tweenTopRight = TweenLite.fromTo('.decoration-silhouette.top-right', 1, {
      x: silhouetteMoveLength,
      y: silhouetteMoveLength
    }, {x: -silhouetteMoveLength, y: -silhouetteMoveLength, ease: 'linear'});

    const awardsSilhouetteAnimation = new TimelineLite()
      .addLabel('start', 0)
      .add(tweenTopLeft, 'start')
      .add(tweenBottomLeft, 'start')
      .add(tweenBottomRight, 'start')
      .add(tweenTopRight, 'start');

    scene
      // .AddIndicators('Awards Scene')
      .setTween(awardsSilhouetteAnimation);
    this.ctrl.AddScenes([scene]);

  }

}

