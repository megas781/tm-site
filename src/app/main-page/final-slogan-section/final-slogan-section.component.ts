import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Scene, ScrollMagic } from 'scrollmagiclib';
import { TimelineLite, TweenLite } from 'gsap';

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
    const scene = new Scene(0,
      0,
      '.final-slogan-section',
      '0.8',
      true);

    const d = 0.1;
    const delay = "+=0.35";

    const timeline = new TimelineLite();
    for (let i = 1; i <= 5; i++) {
      timeline.add(TweenLite.from(".sl-" + i, d, {opacity: 0}), delay);
    }
    scene.setTween(timeline);

    //Теперь (внимание!) обращаемся не к scene.AddToController(), а именно к контроллеру
    this.scrollCtrl.AddScenes(scene);

  }

}
