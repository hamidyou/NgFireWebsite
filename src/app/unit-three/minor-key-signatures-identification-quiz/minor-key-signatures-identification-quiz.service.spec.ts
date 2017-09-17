import { TestBed, inject } from '@angular/core/testing';

import { MinorKeySignaturesIdentificationQuizService } from './minor-key-signatures-identification-quiz.service';

describe('MinorKeySignaturesIdentificationQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorKeySignaturesIdentificationQuizService]
    });
  });

  it('should be created', inject([MinorKeySignaturesIdentificationQuizService], (service: MinorKeySignaturesIdentificationQuizService) => {
    expect(service).toBeTruthy();
  }));
});
