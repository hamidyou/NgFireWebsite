import { TestBed, inject } from '@angular/core/testing';

import { MajorScaleQuizQuestionDisplayService } from './major-scale-quiz-question-display.service';

describe('MajorScaleQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorScaleQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([MajorScaleQuizQuestionDisplayService], (service: MajorScaleQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
