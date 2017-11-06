import {inject, TestBed} from '@angular/core/testing';

import {IntervalConstructionQuizQuestionDisplayService} from './interval-construction-quiz-question-display.service';

describe('IntervalConstructionQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalConstructionQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([IntervalConstructionQuizQuestionDisplayService], (service: IntervalConstructionQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
