import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntervalConstructionQuizQuestionDisplayComponent} from './interval-construction-quiz-question-display.component';

describe('IntervalConstructionQuizQuestionDisplayComponent', () => {
  let component: IntervalConstructionQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<IntervalConstructionQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalConstructionQuizQuestionDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalConstructionQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
