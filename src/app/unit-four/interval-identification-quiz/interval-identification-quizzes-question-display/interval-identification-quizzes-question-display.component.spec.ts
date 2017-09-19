import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntervalIdentificationQuizzesQuestionDisplayComponent} from './interval-identification-quizzes-question-display.component';

describe('IntervalIdentificationQuizzesQuestionDisplayComponent', () => {
  let component: IntervalIdentificationQuizzesQuestionDisplayComponent;
  let fixture: ComponentFixture<IntervalIdentificationQuizzesQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalIdentificationQuizzesQuestionDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalIdentificationQuizzesQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
