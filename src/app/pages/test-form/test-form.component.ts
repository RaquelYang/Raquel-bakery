import { Component } from '@angular/core';
import { ReactFormControlValueAccessorTestComponent } from './react-form-control-value-accessor-test/react-form-control-value-accessor-test.component';
import { ReactFormTestComponent } from './react-form-test/react-form-test.component';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [ReactFormControlValueAccessorTestComponent, ReactFormTestComponent],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'
})
export class TestFormComponent {

}
