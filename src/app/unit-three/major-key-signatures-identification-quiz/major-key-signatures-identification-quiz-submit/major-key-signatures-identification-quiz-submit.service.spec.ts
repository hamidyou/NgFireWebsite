import { TestBed, inject } from '@angular/core/testing';

import { MajorKeySignaturesIdentificationQuizSubmitService } from './major-key-signatures-identification-quiz-submit.service';

describe('MajorKeySignaturesIdentificationQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorKeySignaturesIdentificationQuizSubmitService]
    });
  });

  it('should be created', inject([MajorKeySignaturesIdentificationQuizSubmitService], (service: MajorKeySignaturesIdentificationQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
