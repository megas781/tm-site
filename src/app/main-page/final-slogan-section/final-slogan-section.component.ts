import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ScrollMagic} from 'scrollmagiclib';

@Component({
  selector: 'app-final-slogan-section',
  templateUrl: './final-slogan-section.component.html',
  styleUrls: ['./final-slogan-section.component.css']
})
export class FinalSloganSectionComponent implements OnInit, AfterViewInit {

  @Input() scrollCtrl: ScrollMagic;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
