import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute){}
  sidebarLists = this.activatedRoute.snapshot.data['sidebarLists']
  ngOnInit(): void {
    console.log('sidebarLists', this.sidebarLists);
  }
}
