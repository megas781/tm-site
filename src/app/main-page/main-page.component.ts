import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TweenLite} from 'gsap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //анимации
    TweenLite.from(document.querySelector('.intro__image'), 2.5, {ease: "power2.out",scale: '0.9', opacity: 1});
  }

}
