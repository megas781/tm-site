import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TweenLite} from 'gsap';
@Component({
  selector: 'app-mentors-page',
  templateUrl: './mentors-page.component.html',
  styleUrls: ['./mentors-page.component.css']
})
export class MentorsPageComponent implements OnInit, AfterViewInit {

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
