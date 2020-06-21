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
    this.memberService.fetchMembers();
    this.scrollCtrl = new ScrollMagic('body');
  }
  ngAfterViewInit() {
    const count = this.memberService.getMembers().length;
    for (let i = 1; i <= count; i++) {
      
      this.scrollCtrl.AddScenes(
        new Scene(0,
        0,
        '.member-container__member:nth-child('+i+')',
        '0.9',
        false)
      //.AddIndicators('Member Scene')
        .setTween(TweenLite.from('.member-container__member:nth-child('+i+')', 0.4, {opacity: 0, y: -5}))
      );
      
    };
  }

}
