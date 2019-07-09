import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { WhyChooseUsComponent } from './landing/why-choose-us/why-choose-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WhyChooseUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
