import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSmoothScrollDirectiveOption } from '@eunsatio/ngx-smooth-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public options: NgxSmoothScrollDirectiveOption = {
    duration: 500, // Global option
    wheel: {
      duration: 600, // This will override global option
      timingFunction: 'ease-out',
    },
    keydown: {
      timingFunction: 'ease-in',
    },
  };
  constructor(
    private router: Router,

    private titleService: Title
  ) {
    titleService.setTitle('Legione Etruria');
  }
}
