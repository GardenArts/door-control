import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorControlComponent } from './door-control.component';

describe('DoorControlComponent', () => {
  let component: DoorControlComponent;
  let fixture: ComponentFixture<DoorControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoorControlComponent]
    });
    fixture = TestBed.createComponent(DoorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
