import { TestBed, inject } from '@angular/core/testing';

import { MajorKeySignaturesConstructionQuizSubmitService } from './major-key-signatures-construction-quiz-submit.service';

describe('MajorKeySignaturesConstructionQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorKeySignaturesConstructionQuizSubmitService]
    });
  });

  it('should be created', inject([MajorKeySignaturesConstructionQuizSubmitService], (service: MajorKeySignaturesConstructionQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
