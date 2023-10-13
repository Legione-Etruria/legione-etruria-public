import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'qr',
    redirectTo: '/',
  },
  // {
  //   path: 'home',
  //   component: HomepageComponent,
  //   data: { animation: 0 },
  // },
  // {
  //   path: 'contattaci',
  //   component: PlayWithUsComponent,
  //   data: { animation: 1 },
  // },
  // {
  //   path: 'chi-siamo',
  //   component: AboutUsComponent,
  //   data: { animation: 2 },
  // },
  // {
  //   path: '**',
  //   redirectTo: '/',
  // },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    useHash: true,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
