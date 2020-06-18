import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Event} from '../../data-model/Event';
import {Scene, ScrollMagic} from 'scrollmagiclib';
import { TweenLite } from 'gsap';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, AfterViewInit {

  @Input() listTitle: string;
  @Input() events: Array<Event>;
  @Input() useFadeAppear: boolean = false;
  @Input() scrollCtrl: ScrollMagic;

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    let scene = new Scene(200,0, '.past-events-container',0.65, true);
    scene.setTween(TweenLite.from(".past-events-container", 0.45, {opacity: 0.33}));
    this.scrollCtrl.AddScenes(scene);
  }


}
