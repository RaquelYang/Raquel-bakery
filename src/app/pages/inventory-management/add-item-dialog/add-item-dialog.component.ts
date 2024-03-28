import { Component } from '@angular/core';
import { DialogTemplateComponent } from '../../../shared/components/ui/dialog/dialog-template/dialog-template.component';
import { InputComponent } from '../../../shared/components/ui/form/input/input.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item-dialog',
  standalone: true,
  imports: [DialogTemplateComponent, InputComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './add-item-dialog.component.html',
  styleUrl: './add-item-dialog.component.scss'
})
export class AddItemDialogComponent {
  itemForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

}
