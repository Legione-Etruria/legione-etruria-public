import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSmoothScrollModule } from '@eunsatio/ngx-smooth-scroll';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsButtonsComponent } from './actual-components/contacts-buttons/contacts-buttons.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MembersComponent } from './members/members.component';
import { ParallaxDirective } from './parallax.directive';
import { PlayWithUsComponent } from './play-with-us/play-with-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ParallaxDirective,
    AboutUsComponent,
    PlayWithUsComponent,
    ContactsButtonsComponent,
    MembersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxSmoothScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
