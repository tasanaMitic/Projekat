import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SveRenteComponent } from './sve-rente.component';

describe('SveRenteComponent', () => {
  let component: SveRenteComponent;
  let fixture: ComponentFixture<SveRenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SveRenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SveRenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
