import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  public loading = true;

  constructor(titleService: Title) {
    titleService.setTitle('Chi siamo');
  }

  public images = [
    'assets/images/members/about-us-cover-photo.jpeg',
    'assets/images/members/akira.jpeg',
    'assets/images/members/ariete.jpeg',
    'assets/images/members/combo1.jpeg',
    'assets/images/members/combo2.jpeg',
    'assets/images/members/combo3.jpeg',
    'assets/images/members/drill.jpeg',
    'assets/images/members/germanico.jpeg',
    'assets/images/members/johnny.jpeg',
    'assets/images/members/main-wallpaper.jpg',
    'assets/images/members/mosca.jpeg',
    'assets/images/members/price.jpeg',
    'assets/images/members/rerum.jpeg',
    'assets/images/members/scorpion.jpeg',
    'assets/images/members/smith.jpeg',
    'assets/images/members/spike.jpeg',
    'assets/images/members/taurus.jpeg',
    'assets/images/members/vecho.jpeg',
  ];
}
