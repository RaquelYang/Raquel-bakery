import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { SIDEBAR_ITEMS, SidebarVM } from '../../layouts/sidebar/sidebar.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  getSidebarList(): Observable<SidebarVM[]> {
    return of(SIDEBAR_ITEMS).pipe(delay(1000))
  }
}
