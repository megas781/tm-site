import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ScrollMagic } from 'scrollmagiclib'; //ремарка: принимаем тот факт, что ScrollMagic – это и есть класс контроллера.
import { Scene } from 'scrollmagiclib';
import { TimelineLite, TweenLite } from 'gsap';

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
    const scenePreview = new Scene(0,
      -56,
      '.intro-section',
      '0',
      false);

    const tweenLogo = TweenLite.fromTo('.intro__image', 4, { opacity: 0, scale: 0.9, delay: 0.1 }, { opacity: 1, scale: 1, delay: 0.1 });

    const tweenWelcome = TweenLite.fromTo('.intro__greeting', 2, { opacity: 0, delay: 3 }, { opacity: 1, delay: 3 });

    //Если не изучала... Изучала)
    const previewAnimation = new TimelineLite()
      .add(tweenLogo, 0)
      .add(tweenWelcome, 1);

    scenePreview
      .setTween(previewAnimation);
    //Теперь (внимание!) обращаемся не к scene.AddToController(), а именно к контроллеру
    this.scrollCtrl.AddScenes([scenePreview]);
  }

}


