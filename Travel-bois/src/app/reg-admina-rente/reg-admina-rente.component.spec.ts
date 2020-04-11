import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAdminaRenteComponent } from './reg-admina-rente.component';

describe('RegAdminaRenteComponent', () => {
  let component: RegAdminaRenteComponent;
  let fixture: ComponentFixture<RegAdminaRenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAdminaRenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAdminaRenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
