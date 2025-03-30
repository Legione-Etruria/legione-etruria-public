import { Component } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    standalone: false
})
export class HomepageComponent {
  public loading = true;

  constructor( public utilsService: UtilsService) {
    
  }
}
