import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Member} from '../../data-model/Member';
import { Scene, ScrollMagic } from 'scrollmagiclib';
import { TweenLite } from 'gsap';
import {trigger, transition, animate, state, style, keyframes} from '@angular/animations';
import {enterAnimationTrigger} from '../../animations';
@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css'],
  animations: [
    enterAnimationTrigger
  ]
})
export class MemberViewComponent implements OnInit, AfterViewInit {

  @Input() scrollCtrl: ScrollMagic;
  @Input() member: Member;

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {

  }

}
