import {Component, Input, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {ScrollMagic} from 'scrollmagiclib';

@Component({
  selector: 'app-our-plays-section',
  templateUrl: './our-plays-section.component.html',
  styleUrls: ['./our-plays-section.component.css']
})
export class OurPlaysSectionComponent implements OnInit {

  @Input() scrollCtrl: ScrollMagic;

  constructor() { }

  ngOnInit() {

    var ourPlaysSwiper = new Swiper( '.our-plays__swiper', {
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 2
        },
        769: {
          slidesPerView: 3
        }
      },
      autoplay: {
        delay: 8000
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 32,
      centeredSlides: true,
      navigation: {
        nextEl: '.our-plays__swiper .swiper-button-next',
        prevEl: '.our-plays__swiper .swiper-button-prev'
      }
    });

  }

}
