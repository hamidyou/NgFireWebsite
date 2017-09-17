import { TestBed, inject } from '@angular/core/testing';

import { MinorKeySignaturesIdentificationQuizSubmitService } from './minor-key-signatures-identification-quiz-submit.service';

describe('MinorKeySignaturesIdentificationQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorKeySignaturesIdentificationQuizSubmitService]
    });
  });

  it('should be created', inject([MinorKeySignaturesIdentificationQuizSubmitService], (service: MinorKeySignaturesIdentificationQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
