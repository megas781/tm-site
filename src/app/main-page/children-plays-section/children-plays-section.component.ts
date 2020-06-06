import {Component, Input, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {ScrollMagic} from 'scrollmagiclib';

@Component({
  selector: 'app-children-plays-section',
  templateUrl: './children-plays-section.component.html',
  styleUrls: ['./children-plays-section.component.css']
})
export class ChildrenPlaysSectionComponent implements OnInit {

  @Input() scrollCtrl: ScrollMagic;

  constructor() { }

  ngOnInit() {
    var childrenPlaySwiper = new Swiper('.children-plays__swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows : true,
      // },
      pagination: {
        el: '.children-plays__swiper .swiper-pagination',
      },
    });
  }

}
