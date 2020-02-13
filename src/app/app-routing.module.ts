import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/landing/home',
  //   pathMatch: 'full'
  // },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(mod => mod.LandingModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(mod => mod.MainModule)
  },
  // {
  //   path: '**',
  //   redirectTo: '/landing/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
