import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor, Validator {

  value!: string;
  disabled = false;

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
    console.log('isDisabled', isDisabled);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.errors) {
      return control.errors
    }
    return null
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
}

type OnChangeFn<T> = (value: T) => void;
type OnTouched = () => void;
