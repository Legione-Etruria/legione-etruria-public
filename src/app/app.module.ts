import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSmoothScrollModule } from '@eunsatio/ngx-smooth-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsButtonsComponent } from './components/contacts-buttons/contacts-buttons.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { MembersComponent } from './containers/members/members.component';
import { PlayWithUsComponent } from './containers/play-with-us/play-with-us.component';
import { ParallaxDirective } from './parallax.directive';
import { SocialsComponent } from './components/socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ParallaxDirective,
    AboutUsComponent,
    PlayWithUsComponent,
    ContactsButtonsComponent,
    MembersComponent,
    SocialsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxSmoothScrollModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
