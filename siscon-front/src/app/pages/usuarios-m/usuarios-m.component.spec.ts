import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosMComponent } from './usuarios-m.component';

describe('UsuariosMComponent', () => {
  let component: UsuariosMComponent;
  let fixture: ComponentFixture<UsuariosMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
