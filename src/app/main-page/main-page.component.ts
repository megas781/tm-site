import {AfterViewInit, Component, OnInit } from '@angular/core';
import {ScrollMagic} from 'scrollmagiclib'; //ремарка: принимаем тот факт, что ScrollMagic – это и есть класс контроллера.

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
  }

  ngAfterViewInit(): void {

  }

}

