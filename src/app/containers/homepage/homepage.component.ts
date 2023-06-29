import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  public loading = true;

  constructor(private titleService: Title, public utilsService: UtilsService) {
    titleService.setTitle('Home');
  }
}
