import { TestBed, inject } from '@angular/core/testing';

import { MajorKeySignaturesConstructionQuizQuestionDisplayService } from './major-key-signatures-construction-quiz-question-display.service';

describe('MajorKeySignaturesConstructionQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorKeySignaturesConstructionQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([MajorKeySignaturesConstructionQuizQuestionDisplayService], (service: MajorKeySignaturesConstructionQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
