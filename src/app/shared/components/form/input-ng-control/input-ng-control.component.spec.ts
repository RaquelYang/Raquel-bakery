import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNgControlComponent } from './input-ng-control.component';

describe('InputNgControlComponent', () => {
  let component: InputNgControlComponent;
  let fixture: ComponentFixture<InputNgControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNgControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNgControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
