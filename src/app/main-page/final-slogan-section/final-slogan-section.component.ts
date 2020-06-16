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
    const scene = new Scene(window.innerHeight * 0.96,
      -150,
      '.final-slogan-section',
      '0.5',
      true);

    const tween1 = TweenLite.fromTo('.sl-1', 2, {
      transformOrigin: "0% 100%", z: 20, opacity: 0.4, rotationX: 90
    }, { transformOrigin: "50% 50%", z: 0, ease: 'linear', opacity: 1, rotationX: 0 });

    const tween2 = TweenLite.fromTo('.sl-2', 1.2, {
      x: -70,
      opacity: 0
    }, { x: 0, ease: 'power1.out', opacity: 1 });

    const tween3 = TweenLite.fromTo('.sl-3', 1.3, {
      x: 70,
      opacity: 0
    }, { x: 0, ease: 'linear', opacity: 1 });

    const tween4 = TweenLite.fromTo('.sl-4', 1.6, {
      rotationY: 300,
      opacity: 0
    }, { x: 0, ease: 'ease', opacity: 1, rotationY: 0 });

    const tween5 = TweenLite.fromTo('.sl-5', 2, {
      scale: 0,
      opacity: 0,
    }, { x: 0, ease: 'easeOut', scale: 1, opacity: 1 });

    const finalAnimation = new TimelineLite()
      .add(tween1, 0)
      .add(tween2, "+=0.05")
      .add(tween3, "+=0.03")
      .add(tween4, "+=0.03")
      .add(tween5, "+=0.04");

    scene
      .AddIndicators('Awards Scene')
      .setTween(finalAnimation);
    //Теперь (внимание!) обращаемся не к scene.AddToController(), а именно к контроллеру
    this.scrollCtrl.AddScenes([scene]);

  }

}
