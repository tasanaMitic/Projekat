import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLetovaComponent } from './lista-letova.component';

describe('ListaLetovaComponent', () => {
  let component: ListaLetovaComponent;
  let fixture: ComponentFixture<ListaLetovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLetovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLetovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
