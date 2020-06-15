import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MemberService} from "../member.service";
import {Member} from '../data-model/Member';
@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent implements OnInit, AfterViewInit {

  // members = Array<Member>();

  constructor(public memberService: MemberService) { }

  ngOnInit() {
    let self = this;
    this.memberService.fetchMembers();
  }
  ngAfterViewInit() {

  }

}
