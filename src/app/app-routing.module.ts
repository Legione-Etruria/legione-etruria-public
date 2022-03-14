import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { MembersComponent } from './containers/members/members.component';
import { PlayWithUsComponent } from './containers/play-with-us/play-with-us.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'membri',
    component: MembersComponent,
  },
  {
    path: 'chi-siamo',
    component: AboutUsComponent,
  },
  {
    path: 'contattaci',
    component: PlayWithUsComponent,
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
