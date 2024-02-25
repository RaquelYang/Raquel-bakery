import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/components/form/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, AbstractControl, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-react-form-control-value-accessor-test',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, MatDividerModule, CommonModule],
  templateUrl: './react-form-control-value-accessor-test.component.html',
  styleUrl: './react-form-control-value-accessor-test.component.scss'
})
export class ReactFormControlValueAccessorTestComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      input: [{value: '', disabled: true}, Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.input);
  }

  get input(): AbstractControl {
    return this.form.controls['input']
  }

}
