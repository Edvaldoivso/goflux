import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLanceComponent } from './card-lance.component';

describe('CardLanceComponent', () => {
  let component: CardLanceComponent;
  let fixture: ComponentFixture<CardLanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
