import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../../data-model/Member';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent implements OnInit {

  @Input() member: Member;

  constructor() { }

  ngOnInit() {

  }

}
