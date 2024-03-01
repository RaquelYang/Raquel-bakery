import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactFormNgControlComponent } from './react-form-ng-control/react-form-ng-control.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports:  [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, ReactFormNgControlComponent, CommonModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'
})
export class TestFormComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
