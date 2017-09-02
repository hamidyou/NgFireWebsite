import { TestBed, inject } from '@angular/core/testing';

import { MajorKeySignaturesIdentificationQuizQuestionDisplayService } from './major-key-signatures-identification-quiz-question-display.service';

describe('MajorKeySignaturesIdentificationQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorKeySignaturesIdentificationQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([MajorKeySignaturesIdentificationQuizQuestionDisplayService], (service: MajorKeySignaturesIdentificationQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
