import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetBrzaRezervacijaComponent } from './let-brza-rezervacija.component';

describe('LetBrzaRezervacijaComponent', () => {
  let component: LetBrzaRezervacijaComponent;
  let fixture: ComponentFixture<LetBrzaRezervacijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetBrzaRezervacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetBrzaRezervacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
