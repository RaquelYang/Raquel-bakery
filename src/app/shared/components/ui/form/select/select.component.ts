import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'ui-select',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule, MatSelectModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})

export class SelectComponent implements ControlValueAccessor {
  @Input() title = '標題名稱';
  @Input() required = false;
  @Input() options: Option[] = [];

  value!: string;
  disabled = false;

  constructor(@Optional() @Self() public selectControl: NgControl) {
    this.selectControl.valueAccessor = this;
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

interface Option {
  value: string;
  display: string;
}
