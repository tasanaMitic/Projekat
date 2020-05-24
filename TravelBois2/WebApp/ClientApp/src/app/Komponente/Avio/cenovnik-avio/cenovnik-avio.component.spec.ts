import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenovnikAvioComponent } from './cenovnik-avio.component';

describe('CenovnikAvioComponent', () => {
  let component: CenovnikAvioComponent;
  let fixture: ComponentFixture<CenovnikAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenovnikAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenovnikAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
