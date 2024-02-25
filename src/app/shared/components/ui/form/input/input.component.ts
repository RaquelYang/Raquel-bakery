import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder = '請輸入關鍵字';
  @Input() hint = 'aaa';
  @Input() required = true;
  @Input() type = 'text';
  @Input() title = '標題名稱';

   value!: string;
  disabled = false;

  constructor(@Optional() @Self() public inputControl: NgControl) {
    this.inputControl.valueAccessor = this;
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
