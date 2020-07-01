import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild('theMemberView', {static: false}) theMemberView: ElementRef;

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    if (Number(this.member.id) > 20) {
      let scene = new Scene(0,0, `.member-view.m${this.member.id}`, 0.8, false);
      scene.setTween(TweenLite.from(`.member-view.m${this.member.id}`, 0.5, {opacity: 0.3, delay: Math.random()/8}));
      this.scrollCtrl.AddScenes(scene);
    }
  }

}
