import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausarComponent } from './pausar.component';

describe('PausarComponent', () => {
  let component: PausarComponent;
  let fixture: ComponentFixture<PausarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PausarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PausarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
