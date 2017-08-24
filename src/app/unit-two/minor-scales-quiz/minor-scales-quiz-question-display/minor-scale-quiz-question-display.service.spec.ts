import { TestBed, inject } from '@angular/core/testing';

import { MinorScaleQuizQuestionDisplayService } from './minor-scale-quiz-question-display.service';

describe('MinorScaleQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorScaleQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([MinorScaleQuizQuestionDisplayService], (service: MinorScaleQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
