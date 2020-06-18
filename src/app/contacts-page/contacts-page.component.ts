import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  contacts = [
    // {
    //   name: "Самвел Микиртычев",
    //   position: "Руководитель коллектива",
    //   links: [
    //     {
    //       pretitle: "ВК",
    //       title: "vk.com/samvelmik",
    //       link: "https://vk.com/samvelmik"
    //     }
    //   ]
    // },
    // {
    //
    // }
  ]

  constructor() { }

  ngOnInit() {
  }

}
