import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntervalConstructionQuizScoringComponent} from './interval-construction-quiz-scoring.component';

describe('IntervalConstructionQuizScoringComponent', () => {
  let component: IntervalConstructionQuizScoringComponent;
  let fixture: ComponentFixture<IntervalConstructionQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalConstructionQuizScoringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalConstructionQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
