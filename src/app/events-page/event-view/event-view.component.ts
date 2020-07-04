import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Event} from '../../data-model/Event';
import {TweenLite} from 'gsap';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit, AfterViewInit {

  @Input() event: Event;

  isTextRevealed = false;

  @ViewChild('paragraphElement', {static: true}) paragraphElement: ElementRef;


  constructor() {
  }

  ngOnInit() {
  }

  onRevealButtonTapped() {
    this.isTextRevealed = !this.isTextRevealed;
  }

  isTextOverflowed() {

  }

  ngAfterViewInit() {
    console.log('asdf');

    let self = this;
    let onResize = function() {
      // console.log(self);

      //Подсчет, нужен ли collapse параграфу
      let elem = (self.paragraphElement.nativeElement as HTMLElement);

      if (self.event.title == 'Спектакль "Петля времени"') {
        console.log(elem.clientHeight);
      }

      elem.classList.remove('collapsed');
      if (elem.clientHeight > 180) {
        elem.classList.add('collapsed');
      } else {
        elem.classList.remove('collapsed');
      }
    }
    onResize()
    window.addEventListener('resize', onResize);
  }
}
