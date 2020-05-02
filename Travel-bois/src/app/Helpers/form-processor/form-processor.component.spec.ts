import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProcessorComponent } from './form-processor.component';

describe('FormProcessorComponent', () => {
  let component: FormProcessorComponent;
  let fixture: ComponentFixture<FormProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
