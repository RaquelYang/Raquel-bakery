import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SIDEBAR_ITEMS, SidebarVM } from '../../layouts/sidebar/sidebar.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  getSidebarLists(): Observable<SidebarVM[]> {
    return of(SIDEBAR_ITEMS)
  }
}
