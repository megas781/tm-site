import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScrollMagic} from 'scrollmagiclib'; //ремарка: принимаем тот факт, что ScrollMagic – это и есть класс контроллера.
import {Scene} from 'scrollmagiclib';
import {TimelineLite, TweenLite} from 'gsap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  // ScrollmagicController: ScrollMagic;
  //scrollmagicController: any;

  scrollCtrl: ScrollMagic;

  constructor() {
  }

  ngOnInit() {
    /* Контроллер инициализируется в ngOnInit, чтобы при инициализации представления, когда мы его будем
    передавать в awards-section (см. main-page.component.html), это свойство уже существовало */
    this.scrollCtrl = new ScrollMagic('body');
  }

  ngAfterViewInit(): void {
    // анимация первого блока с лого и Добро пожаловать
    const tweenLogo = TweenLite.fromTo('.intro__image', 2.5,
      {opacity: 0, scale: 0.95},
      {opacity: 1, scale: 1});
    const tweenWelcome = TweenLite.fromTo('.intro__greeting', 0.5,
      {opacity: 0},
      {opacity: 1});
    new TimelineLite()
      .add(tweenLogo, 1.2)
      .add(tweenWelcome, '-=0.3');
  }

}


