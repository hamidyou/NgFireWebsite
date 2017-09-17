import { TestBed, inject } from '@angular/core/testing';

import { MinorKeySignaturesConstructionQuizSubmitService } from './minor-key-signatures-construction-quiz-submit.service';

describe('MinorKeySignaturesConstructionQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorKeySignaturesConstructionQuizSubmitService]
    });
  });

  it('should be created', inject([MinorKeySignaturesConstructionQuizSubmitService], (service: MinorKeySignaturesConstructionQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
