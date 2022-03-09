import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAutoComponent } from './mostrar-auto.component';

describe('MostrarAutoComponent', () => {
  let component: MostrarAutoComponent;
  let fixture: ComponentFixture<MostrarAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
