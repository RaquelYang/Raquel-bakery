import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormNgControlComponent } from './react-form-ng-control.component';

describe('ReactFormNgControlComponent', () => {
  let component: ReactFormNgControlComponent;
  let fixture: ComponentFixture<ReactFormNgControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactFormNgControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactFormNgControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
