import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import { TweenLite } from "gsap";
import Swiper from 'swiper';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Творческая Мастерская Московского Политеха';
  constructor(titleService: Title) {
    titleService.setTitle(this.title);
  }
  ngOnInit() {

  }
}

