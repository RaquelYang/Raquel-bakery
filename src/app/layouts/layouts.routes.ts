import { Route } from '@angular/router';

const NAVBAR_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./navbar/navbar.component').then(mod => mod.NavbarComponent),
    outlet: 'navbar'
  }
];

const SIDEBAR_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./sidebar/sidebar.component').then(mod => mod.SidebarComponent),
    outlet: 'sidebar'
  }
];

const MAIN_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./main/main.component').then(mod => mod.MainComponent),
  }
];

export const LAYOUTS_ROUTES: Route[] = [
  ...NAVBAR_ROUTES, ...SIDEBAR_ROUTES, ...MAIN_ROUTES
];
