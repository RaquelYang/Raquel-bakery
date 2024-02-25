import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/ui/form/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.scss'
})
export class InventoryManagementComponent {
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm()
  }

  initForm(): void {
    this.searchForm = this.fb.group({
      name: '',
      category: '',
      onSale: false
    });
  }

}
