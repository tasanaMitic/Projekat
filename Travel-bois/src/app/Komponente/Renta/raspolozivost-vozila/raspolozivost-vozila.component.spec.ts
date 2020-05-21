import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspolozivostVozilaComponent } from './raspolozivost-vozila.component';

describe('RaspolozivostVozilaComponent', () => {
  let component: RaspolozivostVozilaComponent;
  let fixture: ComponentFixture<RaspolozivostVozilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspolozivostVozilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspolozivostVozilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
