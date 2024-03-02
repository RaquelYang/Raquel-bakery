import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/ui/form/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '../../shared/components/ui/form/select/select.component';
import { RadioComponent } from '../../shared/components/ui/form/radio/radio.component';

@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, CommonModule, SelectComponent, RadioComponent],
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.scss'
})
export class InventoryManagementComponent {
  searchForm!: FormGroup;

  options = [
    {display: '麵包', value: '0'},
    {display: '蛋糕', value: '1'},
    {display: '吐司', value: '2'},
  ]

  constructor(private fb: FormBuilder) {
    this.initForm()
  }

  initForm(): void {
    this.searchForm = this.fb.group({
      name: '',
      category: [],
      onSale: false
    });
  }

}
