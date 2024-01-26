import { sidebarResolver } from './../shared/resolve/sidebar.resolver';
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
    outlet: 'sidebar',
    resolve: {sidebarLists: sidebarResolver}
  }
];

const MAIN_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./main/main.component').then(mod => mod.MainComponent),
    outlet: 'main',
  }
];

const DASHBOARD_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(mod => mod.DashboardComponent),
    children: [
      ...NAVBAR_ROUTES, ...MAIN_ROUTES, ...SIDEBAR_ROUTES
    ]
  }
];

export const LAYOUTS_ROUTES: Route[] = [
  ...DASHBOARD_ROUTES
];
