import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocetnaStranaComponent } from './pocetna-strana.component';

describe('PocetnaStranaComponent', () => {
  let component: PocetnaStranaComponent;
  let fixture: ComponentFixture<PocetnaStranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocetnaStranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocetnaStranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
