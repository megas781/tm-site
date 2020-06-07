// import {isString} from 'util';
// import {TweenLite, TimelineLite} from 'gsap';
//
// export class CustomSlider {
//
//   currentIndex = 0;
//   slides: Array<HTMLElement>;
//   container: HTMLElement;
//   duration: 1;
//
//   constructor(slides: Array<HTMLElement>, container: HTMLElement | string, initialIndex: number = 0) {
//     this.slides = slides;
//     this.currentIndex = initialIndex;
//
//     if (container instanceof HTMLElement) {
//       this.container = container;
//     } else if (isString(container)) {
//       this.container = document.querySelector(container);
//     } else {
//       throw new TypeError("Type of parameter 'container' is not valid. Should be HTMLElement or string only");
//     }
//   }
//
//   slideTo(index: number) {
//
//     const duration = this.duration;
//
//     const i = index;
//
//     const timeline = new TimelineLite().addLabel("start", 0);
//     for (let j = 0; j < i; j++) {
//       timeline.add(TweenLite.to(this.slides[j], duration, {opacity: 0, x: -100}), "start");
//       console.log("prev " + i);
//     }
//     timeline.add(TweenLite.to(this.slides[i], duration, {opacity: 1, x: 0}), "start");
//     console.log("curr " + i);
//     for (let j = i + 1; j < this.slides.length; j++) {
//       timeline.add(TweenLite.to(this.slides[j], duration, {opacity: 0, x: 100}), "start");
//       console.log("next " + i);
//     }
//   }
//
//   slideNext() {
//
//   }
//
//   slidePrev() {
//
//   }
//
// }
