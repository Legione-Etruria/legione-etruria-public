import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

export type LogoState = 'visible' | 'firstLoad' | 'hidden';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: false
})
export class NavComponent  {
  @Input() public isHome = false;

  public appRoutes = [
    {
      anchor: 'play-with-us',
      iconPaths: [
        'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
        'M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z',
      ],
      label: 'Gioca con noi',
    },
    {
      anchor: 'about-us',
      iconPaths: [
        'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      ],
      label: 'Chi Siamo',
    },
  ];

  // {
  //   routerLink: '/home',
  //   iconPaths: [
  //     'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  //   ],
  //   label: 'Home',
  // },

  constructor(public _utils: UtilsService) {}

  


}
