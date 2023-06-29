import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public loading = true;

  constructor(titleService: Title, public utilsService: UtilsService) {
    titleService.setTitle('Home');
  }

  public ngOnInit(): void {}

  visitLink(link: string) {
    console.log('visitLink', link);
    window.open(link);
  }
}
