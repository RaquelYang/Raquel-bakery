import { Component, Input } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ui-dialog-template',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.scss'],
})

export class DialogTemplateComponent {
  @Input() title = '';
  @Input() dialogTitle = '';
}
