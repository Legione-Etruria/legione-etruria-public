import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, ngbConfig: NgbConfig) {
    ngbConfig.animation = true;
  }

  checkRoute() {
    return this.router.url;
  }
}
