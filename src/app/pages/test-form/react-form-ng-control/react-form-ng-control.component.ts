import { Component, OnInit } from '@angular/core';
import { InputNgControlComponent } from '../../../shared/components/form/input-ng-control/input-ng-control.component';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-react-form-ng-control',
  standalone: true,
  imports: [InputNgControlComponent, ReactiveFormsModule, CommonModule, MatDividerModule],
  templateUrl: './react-form-ng-control.component.html',
  styleUrl: './react-form-ng-control.component.scss'
})
export class ReactFormNgControlComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      input: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.input.disable();
    this.input.enable();
  }

  get input(): AbstractControl {
    return this.form.controls['input']
  }

}
