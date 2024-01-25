import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./layouts/layouts.routes').then(mod => mod.LAYOUTS_ROUTES),
  }
];
