import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import { MembersPageComponent } from './members-page/members-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import {MentorsPageComponent} from './mentors-page/mentors-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'contacts', component: ContactsPageComponent},
  { path: 'events', component: EventsPageComponent},
  { path: 'gallery', component: GalleryPageComponent},
  { path: 'members', component: MembersPageComponent},
  { path: 'portfolio', component: PortfolioPageComponent},
  { path: 'mentors', component: MentorsPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
