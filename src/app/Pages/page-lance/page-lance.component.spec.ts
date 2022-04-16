import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLanceComponent } from './page-lance.component';

describe('PageLanceComponent', () => {
  let component: PageLanceComponent;
  let fixture: ComponentFixture<PageLanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
