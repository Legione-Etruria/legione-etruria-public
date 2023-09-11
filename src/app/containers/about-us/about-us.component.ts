import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  public loading = true;

  constructor(titleService: Title, public utilsService: UtilsService) {
    titleService.setTitle('Chi siamo');
  }
}
