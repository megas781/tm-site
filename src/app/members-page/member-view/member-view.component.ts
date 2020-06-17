import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Member} from '../../data-model/Member';
import { Scene, ScrollMagic } from 'scrollmagiclib';
import { TweenLite } from 'gsap';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent implements OnInit, AfterViewInit {

  @Input() scrollCtrl: ScrollMagic;
  @Input() member: Member;
  

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    const scene = new Scene(0,
      0,
      '.member-view',
      '0.1',
      false);

    const tween = TweenLite.from(".member-view", 0.2, {opacity: 0});
    scene
    //.AddIndicators('Member Scene')
    .setTween(tween);

    //Теперь (внимание!) обращаемся не к scene.AddToController(), а именно к контроллеру
    this.scrollCtrl.AddScenes(scene);
  }

}
