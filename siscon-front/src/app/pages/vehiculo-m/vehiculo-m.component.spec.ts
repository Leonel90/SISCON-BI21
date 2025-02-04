import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoMComponent } from './vehiculo-m.component';

describe('VehiculoMComponent', () => {
  let component: VehiculoMComponent;
  let fixture: ComponentFixture<VehiculoMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
