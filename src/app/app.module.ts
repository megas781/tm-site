import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './master/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { MembersPageComponent } from './members-page/members-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { FooterComponent } from './master/footer/footer.component';
import { ActivitiesSectionComponent } from './main-page/activities-section/activities-section.component';
import { YouCanSectionComponent } from './main-page/you-can-section/you-can-section.component';
import { OurPlaysSectionComponent } from './main-page/our-plays-section/our-plays-section.component';
import { ChildrenPlaysSectionComponent } from './main-page/children-plays-section/children-plays-section.component';
import { AwardsSectionComponent } from './main-page/awards-section/awards-section.component';
import { FinalSloganSectionComponent } from './main-page/final-slogan-section/final-slogan-section.component';
import { MemberViewComponent } from './members-page/member-view/member-view.component';
import { EventViewComponent } from './events-page/event-view/event-view.component';
import { JoinUsComponent } from './reusable-modules/join-us/join-us.component';
import { LoadingComponent } from './reusable-modules/loading/loading.component';
import { EventListComponent } from './events-page/event-list/event-list.component';
import { MentorsPageComponent } from './mentors-page/mentors-page.component';
import {TeachersPageComponent} from './teachers-page/teachers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    AboutPageComponent,
    EventsPageComponent,
    GalleryPageComponent,
    PortfolioPageComponent,
    MembersPageComponent,
    ContactsPageComponent,
    FooterComponent,
    ActivitiesSectionComponent,
    YouCanSectionComponent,
    OurPlaysSectionComponent,
    ChildrenPlaysSectionComponent,
    AwardsSectionComponent,
    FinalSloganSectionComponent,
    MemberViewComponent,
    EventViewComponent,
    JoinUsComponent,
    LoadingComponent,
    EventListComponent,
    MentorsPageComponent,
    TeachersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

