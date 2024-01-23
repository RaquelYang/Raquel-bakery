import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent)
  },
  {
    path: 'main',
    loadComponent: () => import('./layouts/main/main.component').then(mod => mod.MainComponent)
  }
];
