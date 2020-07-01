import {animate, style, transition, trigger} from '@angular/animations';

let enterAnimationTrigger =
  trigger('fade-enter-trigger', [
    transition(':enter', [
      style({opacity: 0}),
      animate(1, style({opacity: 1}))
    ])
  ]);


export {
  enterAnimationTrigger
};
