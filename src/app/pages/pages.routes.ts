
import { Route } from '@angular/router';

export const PAGES_ROUTES: Route[] = [
  {
    path: 'inventory-management',
    loadComponent: () => import('./inventory-management/inventory-management.component').then(mod => mod.InventoryManagementComponent)
  },
  {
    path: 'items-management',
    loadComponent: () => import('./items-management/items-management.component').then(mod => mod.ItemsManagementComponent)
  },
  {
    path: 'operations-management',
    loadComponent: () => import('./operations-management/operations-management.component').then(mod => mod.OperationsManagementComponent)
  },
  {
    path: 'receive-order',
    loadComponent: () => import('./receive-order/receive-order.component').then(mod => mod.ReceiveOrderComponent)
  },
];
