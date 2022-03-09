import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarAutoComponent } from './agregar-editar-auto.component';

describe('AgregarEditarAutoComponent', () => {
  let component: AgregarEditarAutoComponent;
  let fixture: ComponentFixture<AgregarEditarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
