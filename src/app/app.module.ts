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
    FooterComponent
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

