import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { slider } from './slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent {
  public isHome = false;

  constructor(private router: Router, private titleService: Title) {
    titleService.setTitle('Legione Etruria');
  }

  ngOnInit(): void {
    if (this.router.url === '/home') {
      this.isHome = true;
    }

    this.router.events.subscribe((_e) => {
      if (!(_e instanceof NavigationEnd)) {
        return;
      }

      if (this.router.url === '/home') {
        this.isHome = true;
        return;
      }

      this.isHome = false;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
