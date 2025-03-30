import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactsButtonsComponent } from './components/contacts-buttons/contacts-buttons.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { FooterComponent } from './components/footer/footer.component';
import { LinesComponent } from './components/lines/lines.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavComponent } from './components/nav/nav.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { SocialsComponent } from './components/socials/socials.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { MembersComponent } from './containers/members/members.component';
import { PlayWithUsComponent } from './containers/play-with-us/play-with-us.component';
import { ParallaxDirective } from './parallax.directive';
import { UtilsService } from './services/utils.service';
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
    NavComponent,
    FooterComponent,
    CarouselComponent,
    LoadingComponent,
    CursorComponent,
    PageTitleComponent,
    LinesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [UtilsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
