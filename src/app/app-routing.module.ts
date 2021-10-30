import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'membri',
    component: HomepageComponent,
  },
  {
    path: 'chi-siamo',
    component: AboutUsComponent,
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
