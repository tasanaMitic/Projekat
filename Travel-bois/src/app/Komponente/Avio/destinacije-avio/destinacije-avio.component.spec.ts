import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinacijeAvioComponent } from './destinacije-avio.component';

describe('DestinacijeAvioComponent', () => {
  let component: DestinacijeAvioComponent;
  let fixture: ComponentFixture<DestinacijeAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinacijeAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinacijeAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
