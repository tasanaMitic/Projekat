import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvestajOPoslovanjuAvioComponent } from './izvestaj-o-poslovanju-avio.component';

describe('IzvestajOPoslovanjuAvioComponent', () => {
  let component: IzvestajOPoslovanjuAvioComponent;
  let fixture: ComponentFixture<IzvestajOPoslovanjuAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzvestajOPoslovanjuAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvestajOPoslovanjuAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
