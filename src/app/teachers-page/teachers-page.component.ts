import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TweenLite} from 'gsap';
@Component({
  selector: 'app-mentors-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.css']
})
export class TeachersPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let mentors = document.querySelectorAll('.mentor');
    mentors.forEach(function(value, key, parent) {
      TweenLite.from(value, 1, {
        delay: 0.4,
        opacity: 0
      });
    });
  }

}
