import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsManagementComponent } from './operations-management.component';

describe('OperationsManagementComponent', () => {
  let component: OperationsManagementComponent;
  let fixture: ComponentFixture<OperationsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
