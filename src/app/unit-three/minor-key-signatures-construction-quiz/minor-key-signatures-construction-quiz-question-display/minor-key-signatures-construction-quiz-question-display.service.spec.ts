import { TestBed, inject } from '@angular/core/testing';

import { MinorKeySignaturesConstructionQuizQuestionDisplayService } from './minor-key-signatures-construction-quiz-question-display.service';

describe('MinorKeySignaturesConstructionQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorKeySignaturesConstructionQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([MinorKeySignaturesConstructionQuizQuestionDisplayService], (service: MinorKeySignaturesConstructionQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
