import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrzeRezervacijeAdminComponent } from './brze-rezervacije-admin.component';

describe('BrzeRezervacijeAdminComponent', () => {
  let component: BrzeRezervacijeAdminComponent;
  let fixture: ComponentFixture<BrzeRezervacijeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrzeRezervacijeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrzeRezervacijeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
