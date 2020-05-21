import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvestajOPoslovanjuRentaComponent } from './izvestaj-o-poslovanju-renta.component';

describe('IzvestajOPoslovanjuRentaComponent', () => {
  let component: IzvestajOPoslovanjuRentaComponent;
  let fixture: ComponentFixture<IzvestajOPoslovanjuRentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzvestajOPoslovanjuRentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvestajOPoslovanjuRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
