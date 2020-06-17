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

  plays = [
    {
      title: "Новогодние приключения Маши и Вити",
      year: "2012",
      localPath: "../../assets/images/images-by-nastya/sec-5-2012.jpg"
    },
    {
      title: "Старая старая сказка",
      year: "2013",
      localPath: "../../assets/images/images-by-nastya/sec-5-2013.jpg"
    },
    {
      title: "Бременские музыканты - 2014",
      year: "2014",
      localPath: "../../assets/images/images-by-nastya/sec-5-2014.jpg"
    },
    {
      title: "Приключения Буратино",
      year: "2015",
      localPath: "../../assets/images/images-by-nastya/sec-5-2015.jpg"
    },
    {
      title: "Волшебный Голос Джельсомино",
      year: "2016",
      localPath: "../../assets/images/images-by-nastya/sec-5-2016.jpg"
    },
    {
      title: "Красная шапочка",
      year: "2017",
      localPath: "../../assets/images/images-by-nastya/sec-5-2017.jpg"
    },
    {
      title: "Мэри Поппинс",
      year: "2018",
      localPath: "../../assets/images/images-by-nastya/sec-5-2018.jpg"
    },
    {
      title: "Бременские музыканты - 2019",
      year: "2019",
      localPath: "../../assets/images/images-by-nastya/sec-5-2019.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
    //Ставим индекс заранее, чтобы
    this.activeBulletIndex = 0;
  }

  ngAfterViewInit() {

    let self = this;
    this.childrenPlaySwiper = new Swiper('.children-plays__swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      breakpoints: {
        769: {
          pagination: {
            el: '.years__container',
            type: "custom",
            bulletClass: "years__year",
            bulletActiveClass: "active",
            clickable: true
          },
        }
      },

      autoplay: {
        delay: 3000
      }
    });
    this.childrenPlaySwiper.on('slideChange', function() {
      self.updateActiveBullet(self.childrenPlaySwiper.activeIndex);
    });

    this.paginationBullets = document.querySelectorAll('.years .years__year');
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
