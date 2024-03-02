import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'ui-radio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
  @Input() title = '標題名稱';

  value!: boolean;
  disabled = false;

  constructor(@Optional() @Self() public radioControl: NgControl) {
    this.radioControl.valueAccessor = this;
  }

  onChange: OnChangeFn<boolean> = () => {};
  onTouched: OnTouched = () => {};
  onValidatorChange = () => {};

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: OnChangeFn<boolean>): void {
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
