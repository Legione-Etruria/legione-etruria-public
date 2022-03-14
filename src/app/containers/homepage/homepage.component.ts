import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}

  visitLink(link: string) {
    console.log('visitLink', link);
    window.open(link);
  }
}
