import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Home');
  }

  public ngOnInit(): void {}

  visitLink(link: string) {
    console.log('visitLink', link);
    window.open(link);
  }
}
