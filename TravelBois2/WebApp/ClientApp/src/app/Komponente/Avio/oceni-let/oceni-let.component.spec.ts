import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceniLetComponent } from './oceni-let.component';

describe('OceniLetComponent', () => {
  let component: OceniLetComponent;
  let fixture: ComponentFixture<OceniLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceniLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceniLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
