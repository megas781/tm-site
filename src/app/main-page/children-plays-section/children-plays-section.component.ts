import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import Swiper from 'swiper';
import {ScrollMagic} from 'scrollmagiclib';

@Component({
  selector: 'app-children-plays-section',
  templateUrl: './children-plays-section.component.html',
  styleUrls: ['./children-plays-section.component.css']
})
export class ChildrenPlaysSectionComponent implements OnInit, AfterViewInit {

  @Input() scrollCtrl: ScrollMagic;

  paginationBullets: NodeListOf<HTMLElement>;
  activeBulletIndex: number;
  childrenPlaySwiper: Swiper;

  constructor() { }

  ngOnInit() {
    let self = this;
    this.childrenPlaySwiper = new Swiper('.children-plays__swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      pagination: {
        el: '.years__container',
        type: "custom",
        bulletClass: "years__year",
        bulletActiveClass: "active",
        clickable: true
      },
      autoplay: {
        delay: 3000
      }
    });
    this.childrenPlaySwiper.on('slideChange', function() {
      self.updateActiveBullet(self.childrenPlaySwiper.activeIndex);
    });
  }

  ngAfterViewInit() {
    this.paginationBullets = document.querySelectorAll('.years .years__year');

    // this.activeBulletIndex = this.paginationBullets.length - 1;
    // this.childrenPlaySwiper.slideTo(this.activeBulletIndex, 0);
    this.activeBulletIndex = 0;
    this.childrenPlaySwiper.slideTo(0, 0);

    this.paginationBullets[this.activeBulletIndex].classList.add('active');
  }

  //non-zero-based
  updateActiveBullet(newActiveIndex: number) {
    this.paginationBullets[this.activeBulletIndex].classList.remove('active');
    this.paginationBullets[newActiveIndex].classList.add('active');
    this.activeBulletIndex = newActiveIndex;
  }

}
