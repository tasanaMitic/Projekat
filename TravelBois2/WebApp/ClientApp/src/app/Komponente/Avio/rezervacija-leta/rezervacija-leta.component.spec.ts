import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaLetaComponent } from './rezervacija-leta.component';

describe('RezervacijaLetaComponent', () => {
  let component: RezervacijaLetaComponent;
  let fixture: ComponentFixture<RezervacijaLetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervacijaLetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervacijaLetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
