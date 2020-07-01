import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {MemberService} from "../member.service";
import {Member} from '../data-model/Member';
import { Scene, ScrollMagic } from 'scrollmagiclib';
import { TimelineLite, TweenLite } from 'gsap';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent implements OnInit, AfterViewInit {

  scrollCtrl: ScrollMagic;
  // members = Array<Member>();
  constructor(public memberService: MemberService) { }

  ngOnInit() {
    let self = this;
    this.memberService.fetchMembers(function() {

    });

    this.scrollCtrl = new ScrollMagic('body');
  }
  ngAfterViewInit() {

  }

}
