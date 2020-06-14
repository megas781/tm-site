import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScrollMagic} from 'scrollmagiclib'; //ремарка: принимаем тот факт, что ScrollMagic – это и есть класс контроллера.
import {TimelineLite, TweenLite} from 'gsap';
import {ajaxGet} from 'rxjs/internal-compatibility';
import {Member} from "../data-model/Member.js";
import {MemberService} from '../member.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  scrollCtrl: ScrollMagic;

  constructor() {
  }

  ngOnInit() {
    /* Контроллер инициализируется в ngOnInit, чтобы при инициализации представления, когда мы его будем
    передавать в awards-section (см. main-page.component.html), это свойство уже существовало */
    this.scrollCtrl = new ScrollMagic('body');

    ajaxGet("https://spreadsheets.google.com/feeds/cells/1Bh-cfOrz5tfhlIE9UohaS0koI4TJZ5akNupkIPoDDCs/od6/public/values?alt=json").subscribe(function(ajax) {

      let people = new Map<string, Object>();
      const mappings = {1: "fio", 2: "birthday", 3: "group", 4: "courseNumber", 5: "faculty", 6: "alive", 7: "photoLink", 8:"vkLink", 9: "position", 10: "comment"};

      for (let i = 0; i < ajax.response.feed.entry.length; i++) {
        let cell = ajax.response.feed.entry[i];
        //Идентифицируем участника
        const id = cell.gs$cell.row;
        //Определяем тип поля
        const fieldTypeNumber = cell.gs$cell.col;
        const fieldName = mappings[fieldTypeNumber];
        //Если это первое поле, то инициализируем
        if (!people.get(id)) {
          people.set(id, new Member(id));
        }
        //Устанавливаем значение
        people.get(id)[fieldName] = cell.content.$t;
      }

      console.log(people);
    })
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


