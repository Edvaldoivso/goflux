import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGeralComponent } from './formulario-geral.component';

describe('FormularioGeralComponent', () => {
  let component: FormularioGeralComponent;
  let fixture: ComponentFixture<FormularioGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
