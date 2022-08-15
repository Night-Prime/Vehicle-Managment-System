import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffModalComponent } from './staff-modal.component';

describe('StaffModalComponent', () => {
  let component: StaffModalComponent;
  let fixture: ComponentFixture<StaffModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
