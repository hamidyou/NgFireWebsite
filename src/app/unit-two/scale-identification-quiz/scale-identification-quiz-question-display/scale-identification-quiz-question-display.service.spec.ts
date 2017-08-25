import { TestBed, inject } from '@angular/core/testing';

import { ScaleIdentificationQuizQuestionDisplayService } from './scale-identification-quiz-question-display.service';

describe('ScaleIdentificationQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScaleIdentificationQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([ScaleIdentificationQuizQuestionDisplayService], (service: ScaleIdentificationQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
