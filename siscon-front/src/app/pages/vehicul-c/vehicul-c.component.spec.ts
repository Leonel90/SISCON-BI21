import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculCComponent } from './vehicul-c.component';

describe('VehiculCComponent', () => {
  let component: VehiculCComponent;
  let fixture: ComponentFixture<VehiculCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
