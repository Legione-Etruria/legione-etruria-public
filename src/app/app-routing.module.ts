import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { PlayWithUsComponent } from './containers/play-with-us/play-with-us.component';

const routes: Routes = [
  {
    path: 'qr',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomepageComponent,
    data: { animation: 0 },
  },
  {
    path: 'contattaci',
    component: PlayWithUsComponent,
    data: { animation: 1 },
  },
  {
    path: 'chi-siamo',
    component: AboutUsComponent,
    data: { animation: 2 },
  },
  {
    path: '**',
    redirectTo: '/home',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
