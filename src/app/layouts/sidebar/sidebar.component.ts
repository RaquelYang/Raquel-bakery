import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
}
