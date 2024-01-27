import { sidebarResolver } from './../shared/resolve/sidebar.resolver';
import { Route } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PAGES_ROUTES } from '../pages/pages.routes';

const NAVBAR_ROUTES: Route =
{
  path: '',
  component: NavbarComponent,
  outlet: 'navbar'
};

const SIDEBAR_ROUTES: Route =
{
  path: '',
  component: SidebarComponent,
  outlet: 'sidebar',
  resolve: {sidebarLists: sidebarResolver}
};


export const LAYOUTS_ROUTES: Route[] = [
  NAVBAR_ROUTES,
  SIDEBAR_ROUTES,
  ...PAGES_ROUTES,
  {
    path: '',
    redirectTo: 'inventory-management',
    pathMatch: 'full'
  }
];
