import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormTestComponent } from './react-form-test.component';

describe('ReactFormTestComponent', () => {
  let component: ReactFormTestComponent;
  let fixture: ComponentFixture<ReactFormTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactFormTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
