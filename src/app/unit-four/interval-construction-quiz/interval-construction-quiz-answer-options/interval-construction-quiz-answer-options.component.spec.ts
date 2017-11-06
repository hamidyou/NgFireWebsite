import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntervalConstructionQuizAnswerOptionsComponent} from './interval-construction-quiz-answer-options.component';

describe('IntervalConstructionQuizAnswerOptionsComponent', () => {
  let component: IntervalConstructionQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<IntervalConstructionQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalConstructionQuizAnswerOptionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalConstructionQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
