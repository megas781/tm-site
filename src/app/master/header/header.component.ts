import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  theWindow: Window;
  shouldHideMobileNav: boolean = true;
  ngOnInit() {
    this.theWindow = window;
    console.log('thewindow: ' + window);
  }

  burgerButtonTapped() {
    this.shouldHideMobileNav = !this.shouldHideMobileNav;
  }

}
