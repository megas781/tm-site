import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  @Input() displayHint = false;

  constructor() { }

  ngOnInit() {
  }

}
