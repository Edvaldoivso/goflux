import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOfertaComponent } from './page-oferta.component';

describe('PageOfertaComponent', () => {
  let component: PageOfertaComponent;
  let fixture: ComponentFixture<PageOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
