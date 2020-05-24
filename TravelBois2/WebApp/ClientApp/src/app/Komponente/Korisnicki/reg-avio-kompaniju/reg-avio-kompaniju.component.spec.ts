import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAvioKompanijuComponent } from './reg-avio-kompaniju.component';

describe('RegAvioKompanijuComponent', () => {
  let component: RegAvioKompanijuComponent;
  let fixture: ComponentFixture<RegAvioKompanijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAvioKompanijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAvioKompanijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
