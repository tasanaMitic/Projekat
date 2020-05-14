import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAvioComponent } from './profil-avio.component';

describe('ProfilAvioComponent', () => {
  let component: ProfilAvioComponent;
  let fixture: ComponentFixture<ProfilAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
