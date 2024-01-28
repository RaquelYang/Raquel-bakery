import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormControlValueAccessorTestComponent } from './react-form-control-value-accessor-test.component';

describe('ReactFormControlValueAccessorTestComponent', () => {
  let component: ReactFormControlValueAccessorTestComponent;
  let fixture: ComponentFixture<ReactFormControlValueAccessorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactFormControlValueAccessorTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactFormControlValueAccessorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
