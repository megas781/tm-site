import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {Event} from '../data-model/Event';
import {Scene, ScrollMagic} from 'scrollmagiclib';
import {TweenLite} from 'gsap';
@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  scrollCtrl = new ScrollMagic('body');
  pastEventsScene: Scene = null;

  constructor(public eventService: EventService) {

  }

  ngOnInit() {

  }

}
