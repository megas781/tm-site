import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Scene, ScrollMagic} from 'scrollmagiclib';
import {TimelineLite, TweenLite} from 'gsap';

@Component({
  selector: 'app-awards-section',
  templateUrl: './awards-section.component.html',
  styleUrls: ['./awards-section.component.css']
})
export class AwardsSectionComponent implements OnInit, AfterViewInit {

  //Контроллер передаётся из main-page.component.ts. Иными словами, это ссылка на MainPageComponent.scrollCtrl
  @Input() scrollCtrl: ScrollMagic;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Создаем сцену ScrollMagic'a, в которую запихнем TimelineLite, состоящий из TweenLite'ов

    const scene = new Scene(window.innerHeight * 2 + 400,
      -200, /* небольшой отступ для начала анимации, чтобы силуэт правого верхнего
      угла начинал двигаться до того, как пользователь доскролит д awards-section (человечик выходит немного за рамки) */
      '.awards-section', //собственно, элемент, который тригеррит анимацию
      '1', /*анимация должна начинаться, как только section начнет появляться на экране
       0 – это верхний край экрана, 0.5 - это середина, 1 - это нижний край экрана */
      true); // Должна ли работать анимация в обе стороны. Я обычно всегда ставлю true, так легче исправлять ошибки и вообще так прикольней ^_^

    const silhouetteMoveLength = 50; //константа просто для удобста установки расстояния движения силуэтов
    //Содаем TweenLite для каждого силуэта. параметр ease: "linear", чтобы анимация не замедлялась в конце
    const tweenTopLeft = TweenLite.fromTo('.decoration-silhouette.top-left', 1, {
      x: silhouetteMoveLength,
      y: -silhouetteMoveLength
    }, {x: -silhouetteMoveLength, y: silhouetteMoveLength, ease: 'linear'});
    const tweenBottomLeft = TweenLite.fromTo('.decoration-silhouette.bottom-left', 1, {
      x: -silhouetteMoveLength,
      // y: -silhouetteMoveLength
    }, {x: silhouetteMoveLength, /*y: silhouetteMoveLength,*/ });
    const tweenBottomRight = TweenLite.fromTo('.decoration-silhouette.bottom-right', 1, {
      x: -silhouetteMoveLength,
      // y: silhouetteMoveLength
    }, {x: silhouetteMoveLength, /*y: -silhouetteMoveLength,*/ });
    const tweenTopRight = TweenLite.fromTo('.decoration-silhouette.top-right', 1, {
      x: -silhouetteMoveLength,
      y: -silhouetteMoveLength
    }, {x: 0, y: silhouetteMoveLength, ease: 'linear'});

    //Теперь все tween'ы нужно запихнуть в один компот под названием Timeline.
    //Если не изучала, что это такое, то в кратце, это последовательность tween'ов.
    /* Это как в монтажной программе. Tween'ы - это клипы, которые можно располагать на таймлайне.
    * В этом конкретном коде я указываю, что все tween'ы должны начинаться одновременно с отметки "start".
    * Более подробно на сайт gsap'a, пожалуйста. Почитай про необычный синтаксис типа "=start+1.3" или что-то такое (уже не помню, как пишется, но зайти в доки короче) */
    const awardsSilhouetteAnimation = new TimelineLite()
      .addLabel('start', 0)
      .add(tweenTopLeft, 'start')
      .add(tweenBottomLeft, 'start')
      .add(tweenBottomRight, 'start')
      .add(tweenTopRight, 'start');

    //Добавляем наш компот (timeline) в сцену
    scene
      // .AddIndicators('Awards Scene')
      .setTween(awardsSilhouetteAnimation);

    //Анимация первого появления силуэтов
    let scene2 = new Scene(0, 0, ".awards-section", 0.55, false);
    scene2.setTween(TweenLite.from(".decoration-silhouette.top-left, .decoration-silhouette.top-right, .decoration-silhouette.bottom-right, .decoration-silhouette.bottom-left", 2.4, {opacity: 0}))

    //Теперь (внимание!) обращаемся не к scene.AddToController(), а именно к контроллеру
    this.scrollCtrl.AddScenes([scene, scene2]);
  }


}
