import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  theWindow: Window;
  shouldHideMobileNav: boolean = false;
  ngOnInit() {
    this.theWindow = window;
    console.log('thewindow: ' + window);
  }

  burgerButtonTapped() {
    this.shouldHideMobileNav = !this.shouldHideMobileNav;
    // console.log('window.innerWidth:');
    // console.log(window.innerWidth);
  }

}
