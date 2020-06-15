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
        delay: 8000
      },
    });
  }


  ngAfterViewInit(): void {

    const scene = new Scene(0,
      120,
      '.activities-section',
      '1',
      false);
    const activitiesAnimation = new TimelineLite();
    for (var i = 1; i < 9; i++)
    {
      activitiesAnimation.add(TweenLite.from(".activity-"+i, 0.4, { opacity: 0, ease: 'linear'}), "-=0.25");
    };

    scene
      //.AddIndicators('Awards Scene')
      .setTween(activitiesAnimation);
    //Теперь (внимание!) обращаемся не к scene.AddToController(), а именно к контроллеру
    this.scrollCtrl.AddScenes([scene]);

  }

}
