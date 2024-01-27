import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./layouts/main/main.component').then(mod => mod.MainComponent),
    loadChildren: () => import('./layouts/layouts.routes').then(mod => mod.LAYOUTS_ROUTES),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
