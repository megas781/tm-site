import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {ScrollMagic} from 'scrollmagiclib';

@Component({
  selector: 'app-our-plays-section',
  templateUrl: './our-plays-section.component.html',
  styleUrls: ['./our-plays-section.component.css']
})
export class OurPlaysSectionComponent implements OnInit, AfterViewInit {

  @Input() scrollCtrl: ScrollMagic;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    var ourPlaysSwiper = new Swiper( '.our-plays__swiper', {
      grabCursor: true,
      // initialSlide: 1,
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        769: {
          slidesPerView: 3
        }
      },
      // autoplay: {
      //   delay: 8000
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 32,
      // centeredSlides: true,
      navigation: {
        nextEl: '.our-plays__swiper .swiper-button-next',
        prevEl: '.our-plays__swiper .swiper-button-prev'
      }
    });
  }

}
