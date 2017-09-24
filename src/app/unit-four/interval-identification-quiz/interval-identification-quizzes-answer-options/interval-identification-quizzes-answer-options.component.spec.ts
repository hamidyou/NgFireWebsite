import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntervalIdentificationQuizzesAnswerOptionsComponent} from './interval-identification-quizzes-answer-options.component';

describe('IntervalIdentificationQuizzesAnswerOptionsComponent', () => {
  let component: IntervalIdentificationQuizzesAnswerOptionsComponent;
  let fixture: ComponentFixture<IntervalIdentificationQuizzesAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalIdentificationQuizzesAnswerOptionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalIdentificationQuizzesAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
