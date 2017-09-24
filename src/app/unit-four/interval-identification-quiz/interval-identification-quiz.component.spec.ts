import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntervalIdentificationQuizComponent} from './interval-identification-quiz.component';

describe('IntervalIdentificationQuizComponent', () => {
  let component: IntervalIdentificationQuizComponent;
  let fixture: ComponentFixture<IntervalIdentificationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalIdentificationQuizComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalIdentificationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
