import { TestBed, inject } from '@angular/core/testing';

import { MinorKeySignaturesIdentificationQuizQuestionDisplayService } from './minor-key-signatures-identification-quiz-question-display.service';

describe('MinorKeySignaturesIdentificationQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorKeySignaturesIdentificationQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([MinorKeySignaturesIdentificationQuizQuestionDisplayService], (service: MinorKeySignaturesIdentificationQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
