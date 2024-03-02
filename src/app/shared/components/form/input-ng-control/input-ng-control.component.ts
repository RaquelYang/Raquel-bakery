import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-input-ng-control',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule, MatSelectModule, MatRadioModule],
  templateUrl: './input-ng-control.component.html',
  styleUrl: './input-ng-control.component.scss'
})
export class InputNgControlComponent implements ControlValueAccessor {
  @Input() placeholder = '請輸入關鍵字';
  @Input() hint = 'aaa';
  @Input() required = true;
  @Input() type = 'text';
  @Input() title = '標題名稱';

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  value!: string;
  disabled = false;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  onChange: OnChangeFn<string> = () => {};
  onTouched: OnTouched = () => {};
  onValidatorChange = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: OnChangeFn<string>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouched): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

type OnChangeFn<T> = (value: T) => void;
type OnTouched = () => void;
