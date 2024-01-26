// import { sidebarResolver } from './sidebar.resolver';
import { ResolveFn } from '@angular/router';
import { SidebarService } from '../service/sidebar.service';
import { inject } from '@angular/core';
import { SidebarVM } from '../../layouts/sidebar/sidebar.model';

export const sidebarResolver: ResolveFn<SidebarVM[]> = () => {
  const sidebarService = inject(SidebarService);
  return sidebarService.getSidebarLists()
};
