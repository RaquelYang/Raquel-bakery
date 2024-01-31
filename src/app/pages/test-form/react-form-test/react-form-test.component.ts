import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-react-form-test',
  standalone: true,
  imports: [ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, CommonModule, MatFormFieldModule, MatInputModule, MatDividerModule],
  templateUrl: './react-form-test.component.html',
  styleUrl: './react-form-test.component.scss'
})
export class ReactFormTestComponent implements OnInit {
  form: FormGroup;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      autocomplete: '',
      autocompleteWithValidator: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.filteredOptions = this.autocomplete.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  get autocomplete(): AbstractControl {
    return this.form.controls['autocomplete']
  }

  get autocompleteWithValidator(): AbstractControl {
    return this.form.controls['autocompleteWithValidator']
  }

}
