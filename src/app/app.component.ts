import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {}

}
