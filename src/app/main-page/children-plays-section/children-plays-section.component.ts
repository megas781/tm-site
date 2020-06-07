import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-children-plays-section',
  templateUrl: './children-plays-section.component.html',
  styleUrls: ['./children-plays-section.component.css']
})
export class ChildrenPlaysSectionComponent implements OnInit {

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