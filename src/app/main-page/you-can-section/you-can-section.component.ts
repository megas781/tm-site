import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {Scene, ScrollMagic} from 'scrollmagiclib';
import {TimelineLite, TweenLite} from 'gsap';
// import {CustomSlider} from "./CustomSlider";
@Component({
  selector: 'app-you-can-section',
  templateUrl: './you-can-section.component.html',
  styleUrls: ['./you-can-section.component.css']
})
export class YouCanSectionComponent implements OnInit, AfterViewInit {

  @Input() scrollCtrl: ScrollMagic;
  // youCanSwiper: Swiper;
  // youCanSwiper: CustomSlider;

  currentActivityIndex = 0;

  constructor() {
  }

  ngOnInit() {

    // this.youCanSwiper = new Swiper('.split-view__image-side > .swiper-container', {
    //   grabCursor: true,
    //   autoplay: {
    //     delay: 4000
    //   },
    //   effect: 'slide'
    // });


  }


  ngAfterViewInit(): void {

    const scene = new Scene(window.innerHeight * 2,
      0,
      '.you-can-section',
      '1',
      true);

    const silhouetteMoveLength = 150;
    //Содаем TweenLite для каждого силуэта. параметр ease: "linear", чтобы анимация не замедлялась в конце
    const tweenMask1 = TweenLite.fromTo('.decoration-silhouette.mask-1', 1, {
      y: 0
    }, {y: -silhouetteMoveLength * 1.5, ease: 'linear', rotation: '+=35'});
    const tweenMask2 = TweenLite.fromTo('.decoration-silhouette.mask-2', 1, {
      y: 0
    }, {y: -silhouetteMoveLength * 1.8, ease: 'linear', rotation: '-=35'});
    const tweenLamp = TweenLite.fromTo('.decoration-silhouette.lamp', 1, {
      y: 0,
      rotation: '0'
    }, {y: -silhouetteMoveLength, ease: 'linear', rotation: '-25'});
    const tweenPen = TweenLite.fromTo('.decoration-silhouette.pen', 1, {
      y: 0, rotation: -20
    }, {y: silhouetteMoveLength * 0.5, rotation: 20, ease: 'linear'});
    const tweenBook = TweenLite.fromTo('.decoration-silhouette.book', 1, {
      y: 0
    }, {y: -silhouetteMoveLength * 0.8, ease: 'linear', rotation: '-=10'});

    //Теперь все tween'ы нужно запихнуть в один компот под названием Timeline.
    //Если не изучала, что это такое, то в кратце, это последовательность tween'ов.
    /* Это как в монтажной программе. Tween'ы - это клипы, которые можно располагать на таймлайне.
    * В этом конкретном коде я указываю, что все tween'ы должны начинаться одновременно с отметки "start".
    * Более подробно на сайт gsap'a, пожалуйста. Почитай про необычный синтаксис типа "=start+1.3" или что-то такое (уже не помню, как пишется, но зайти в доки короче) */
    const awardsSilhouetteAnimation = new TimelineLite()
      .addLabel('start', 0)
      .add(tweenMask1, 'start')
      .add(tweenMask2, 'start')
      .add(tweenLamp, 'start')
      .add(tweenBook, 'start')
      .add(tweenPen, 'start');

    //Добавляем наш компот (timeline) в сцену
    scene
      // .AddIndicators('Awards Scene')
      .setTween(awardsSilhouetteAnimation);
    //Теперь (внимание!) обращаемся не к scene.AddToController(), а именно к контроллеру
    this.scrollCtrl.AddScenes([scene]);




    //Анимации для слайдера
    const slides: Array<HTMLElement> = Array.from(document.querySelectorAll('.custom-slider__slide'));
    const duration = 0.3;
    // this.youCanSwiper = new CustomSlider(slides, '.custom-slider');
    const activityLabels = Array.from(document.querySelectorAll('.split-view__text-side .split-view__parah'));
    const self = this;
    for (let i = 0; i < activityLabels.length; i++) {
      const activity = activityLabels[i];

      if (i != 0) {
        TweenLite.set(slides[i], {opacity: 0, x: 100})
      }

      activity.addEventListener('mouseover', function(e) {

        if (i < self.currentActivityIndex) {
          TweenLite.to(slides[self.currentActivityIndex], duration, {opacity: 0, x: 100});
        } else if (i > self.currentActivityIndex) {
          TweenLite.to(slides[self.currentActivityIndex], duration, {opacity: 0, x: -100});
        }
        TweenLite.to(slides[i], duration, {opacity: 1, x: 0})

        for (let j = 0; j < slides.length; j++) {
          if (j != i && j != self.currentActivityIndex) {
            TweenLite.set(slides[j], {opacity: 0, x: (j > i ? 100 : -100)})
          }
        }
        self.currentActivityIndex = i;

        // for (let j = 0; j < i; j++) {
        //   timeline.add(TweenLite.to(slides[j], duration, {opacity: 0, x: -100}), "start");
        //   console.log("prev " + i);
        // }
        // timeline.add(TweenLite.to(slides[i], duration, {opacity: 1, x: 0}), "start");
        // console.log("curr " + i);
        // for (let j = i + 1; j < slides.length; j++) {
        //   timeline.add(TweenLite.to(slides[j], duration, {opacity: 0, x: 100}), "start");
        //   console.log("next " + i);
        // }
      });
    }


  }

}
