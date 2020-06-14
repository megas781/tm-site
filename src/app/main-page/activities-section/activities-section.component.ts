import {Component, Input, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {ScrollMagic} from 'scrollmagiclib';

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

}
