import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ClientsSectionComponent } from './components/clients-section/clients-section.component';
import { CommunitySectionComponent } from './components/community-section/community-section.component';
import { UnlockSectionComponent } from './components/unlock-section/unlock-section.component';
import { AchievementsSectionComponent } from './components/achievements-section/achievements-section.component';
import { CalendarSectionComponent } from './components/calendar-section/calendar-section.component';
import { CustomersSectionComponent } from './components/customers-section/customers-section.component';
import { CommunityUpdatesComponent } from './components/community-updates/community-updates.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    ClientsSectionComponent,
    CommunitySectionComponent,
    UnlockSectionComponent,
    AchievementsSectionComponent,
    CalendarSectionComponent,
    CustomersSectionComponent,
    CommunityUpdatesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 