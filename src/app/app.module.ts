import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParallaxDirective } from './parallax.directive';
import { NgxSmoothScrollModule } from '@eunsatio/ngx-smooth-scroll';

@NgModule({
  declarations: [AppComponent, HomepageComponent, ParallaxDirective],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgxSmoothScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
