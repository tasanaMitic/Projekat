import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAdminaAvioComponent } from './reg-admina-avio.component';

describe('RegAdminaAvioComponent', () => {
  let component: RegAdminaAvioComponent;
  let fixture: ComponentFixture<RegAdminaAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAdminaAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAdminaAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
