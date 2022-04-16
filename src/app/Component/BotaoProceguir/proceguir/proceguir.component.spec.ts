import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceguirComponent } from './proceguir.component';

describe('ProceguirComponent', () => {
  let component: ProceguirComponent;
  let fixture: ComponentFixture<ProceguirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceguirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceguirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
