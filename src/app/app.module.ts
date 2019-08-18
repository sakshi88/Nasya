import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { WhyChooseUsComponent } from './landing/why-choose-us/why-choose-us.component';
import { OurServicesComponent } from './landing/our-services/our-services.component';
import { OurTeamComponent } from './landing/our-team/our-team.component';
import { ContactAndAboutComponent } from './landing/contact-and-about/contact-and-about.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WhyChooseUsComponent,
    OurServicesComponent,
    OurTeamComponent,
    ContactAndAboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
