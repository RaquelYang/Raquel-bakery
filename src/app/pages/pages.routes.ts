
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
  {
    path: 'react-form-test',
    loadComponent: () => import('./react-form-test/react-form-test.component').then(mod => mod.ReactFormTestComponent)
  },
  {
    path: 'react-form-control-value-accessor-test',
    loadComponent: () => import('./react-form-control-value-accessor-test/react-form-control-value-accessor-test.component').then(mod => mod.ReactFormControlValueAccessorTestComponent)
  },
];
