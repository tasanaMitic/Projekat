import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegRentaKompanijuComponent } from './reg-renta-kompaniju.component';

describe('RegRentaKompanijuComponent', () => {
  let component: RegRentaKompanijuComponent;
  let fixture: ComponentFixture<RegRentaKompanijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegRentaKompanijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegRentaKompanijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
