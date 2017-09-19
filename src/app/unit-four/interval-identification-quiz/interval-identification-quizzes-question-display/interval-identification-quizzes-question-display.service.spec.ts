import {inject, TestBed} from '@angular/core/testing';

import {IntervalIdentificationQuizzesQuestionDisplayService} from './interval-identification-quizzes-question-display.service';

describe('IntervalIdentificationQuizzesQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalIdentificationQuizzesQuestionDisplayService]
    });
  });

  it('should be created', inject([IntervalIdentificationQuizzesQuestionDisplayService], (service: IntervalIdentificationQuizzesQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
