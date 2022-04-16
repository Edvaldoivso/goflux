import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarComponent } from './salvar.component';

describe('SalvarComponent', () => {
  let component: SalvarComponent;
  let fixture: ComponentFixture<SalvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
