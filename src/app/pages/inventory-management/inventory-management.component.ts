import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../shared/components/ui/form/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '../../shared/components/ui/form/select/select.component';
import { RadioComponent } from '../../shared/components/ui/form/radio/radio.component';
import { MatButtonModule } from '@angular/material/button';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { SortItemsPipe } from './sort-items.pipe';
import { CATEGORIES, NAMES, UserData } from './inventory-management.model';
import { MatIconModule } from '@angular/material/icon';
import { DialogService } from '../../shared/service/dialog.service';
import { DIALOG_SIZE } from '../../shared/constants/dialog.constants';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, CommonModule, SelectComponent, RadioComponent, MatButtonModule, InventoryTableComponent, SortItemsPipe, MatIconModule],
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.scss'
})
export class InventoryManagementComponent implements OnInit {
  searchForm!: FormGroup;

  options = [
    { display: '麵包', value: '0' },
    { display: '蛋糕', value: '1' },
    { display: '吐司', value: '2' },
  ]

  users: UserData[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
  ) {
    this.initForm()
  }

  ngOnInit(): void {
    this.users = Array.from({ length: 100 }, (_, k) => this.createNewUser(k + 1));
  }

  initForm(): void {
    this.searchForm = this.fb.group({
      name: '',
      categories: [],
      onSale: null
    });
  }

  resetForm(): void {
    this.searchForm.reset();
  }

  /** Builds and returns a new User. */
  createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))]
    const category = CATEGORIES[Math.round(Math.random() * (CATEGORIES.length - 1))]

    return {
      id: id.toString(),
      name: name,
      category: category,
      isSell: false,
    };
  }

  openAddItemDialog(): void {
    this.dialogService.openDialog(AddItemDialogComponent, DIALOG_SIZE.MD)
  }
}
