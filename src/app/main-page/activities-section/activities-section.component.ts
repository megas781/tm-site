import { Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Scene, ScrollMagic } from 'scrollmagiclib';
import { TimelineLite, TweenLite } from 'gsap';

@Component({
  selector: 'app-activities-section',
  templateUrl: './activities-section.component.html',
  styleUrls: ['./activities-section.component.css']
})
export class ActivitiesSectionComponent implements OnInit {

  @Input() scrollCtrl: ScrollMagic;

  constructor() { }

  ngOnInit() {
    var swiper = new Swiper('.activities-swiper', {
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 32,
      freeMode: true,
      autoplay: {
        delay: 3000,
      },
    });
  }


  ngAfterViewInit(): void {

    const scene = new Scene(0,
      120,
      '.activities-section',
      '1',
      false);
    const time = 0.3; // длительность появления
    const tweenActivity1 = TweenLite.fromTo('.activity-1', time, { opacity: 0 }, { opacity: 1, ease: 'linear' });
    const tweenActivity2 = TweenLite.fromTo('.activity-2', time, { opacity: 0 }, { opacity: 1, ease: 'linear' });
    const tweenActivity3 = TweenLite.fromTo('.activity-3', time, { opacity: 0 }, { opacity: 1, ease: 'linear' });
    const tweenActivity4 = TweenLite.fromTo('.activity-4', time, { opacity: 0 }, { opacity: 1, ease: 'linear' });
    const tweenActivity5 = TweenLite.fromTo('.activity-5', time, { opacity: 0 }, { opacity: 1, ease: 'linear' });
    const tweenActivity6 = TweenLite.fromTo('.activity-6', time, { opacity: 0 }, { opacity: 1, ease: 'linear' });
    const tweenActivity7 = TweenLite.fromTo('.activity-7', time, { opacity: 0 }, { opacity: 1, ease: 'linear' });
    const tweenActivity8 = TweenLite.fromTo('.activity-8', time, { opacity: 0 }, { opacity: 1, ease: 'linear' });

    const delay = "+=0.1"; // задержка появления
    const activitiesAnimation = new TimelineLite()
      .add(tweenActivity1, delay)
      .add(tweenActivity2, delay)
      .add(tweenActivity3, delay)
      .add(tweenActivity4, delay)
      .add(tweenActivity5, delay)
      .add(tweenActivity6, delay)
      .add(tweenActivity7, delay)
      .add(tweenActivity8, delay);

    //Добавляем наш компот (timeline) в сцену
    scene
      .AddIndicators('Awards Scene')
      .setTween(activitiesAnimation);
    //Теперь (внимание!) обращаемся не к scene.AddToController(), а именно к контроллеру
    this.scrollCtrl.AddScenes([scene]);

  }

}
