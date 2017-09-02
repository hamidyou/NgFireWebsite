import { TestBed, inject } from '@angular/core/testing';

import { MajorKeySignaturesIdentificationQuizService } from './major-key-signatures-identification-quiz.service';

describe('MajorKeySignaturesIdentificationQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorKeySignaturesIdentificationQuizService]
    });
  });

  it('should be created', inject([MajorKeySignaturesIdentificationQuizService], (service: MajorKeySignaturesIdentificationQuizService) => {
    expect(service).toBeTruthy();
  }));
});
