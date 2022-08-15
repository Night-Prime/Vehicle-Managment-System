import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleModalComponent } from './vehicle-modal.component';

describe('VehicleModalComponent', () => {
  let component: VehicleModalComponent;
  let fixture: ComponentFixture<VehicleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
