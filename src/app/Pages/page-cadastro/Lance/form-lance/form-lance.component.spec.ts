import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLanceComponent } from './form-lance.component';

describe('FormLanceComponent', () => {
  let component: FormLanceComponent;
  let fixture: ComponentFixture<FormLanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
