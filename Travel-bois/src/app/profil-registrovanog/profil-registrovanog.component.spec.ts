import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRegistrovanogComponent } from './profil-registrovanog.component';

describe('ProfilRegistrovanogComponent', () => {
  let component: ProfilRegistrovanogComponent;
  let fixture: ComponentFixture<ProfilRegistrovanogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilRegistrovanogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilRegistrovanogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
