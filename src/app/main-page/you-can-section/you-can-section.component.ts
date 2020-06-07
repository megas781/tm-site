import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-you-can-section',
  templateUrl: './you-can-section.component.html',
  styleUrls: ['./you-can-section.component.css']
})
export class YouCanSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var youCanSwiper = new Swiper('.split-view__image-side > .swiper-container', {
      grabCursor: true,
      autoplay: {
        delay: 4000
      },
    });

  }

}
