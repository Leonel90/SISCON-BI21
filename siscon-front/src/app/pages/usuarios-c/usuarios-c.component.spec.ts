import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosCComponent } from './usuarios-c.component';

describe('UsuariosCComponent', () => {
  let component: UsuariosCComponent;
  let fixture: ComponentFixture<UsuariosCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
