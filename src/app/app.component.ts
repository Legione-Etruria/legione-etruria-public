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
  appRoutes = [
    {
      routerLink: '/home',
      iconPaths: [
        'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      ],
      label: 'Home',
    },
    {
      routerLink: '/membri',
      iconPaths: [
        'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      ],
      label: 'Membri',
    },
    {
      routerLink: '/contattaci',
      iconPaths: [
        'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
        'M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z',
      ],
      label: 'Gioca con noi',
    },
    {
      routerLink: '/chi-siamo',
      iconPaths: [
        'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      ],
      label: 'Chi Siamo',
    },
    {
      routerLink: '/members/my-legio',
      iconPaths: [
        'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      ],
      label: 'Area membri',
    },
  ];

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
