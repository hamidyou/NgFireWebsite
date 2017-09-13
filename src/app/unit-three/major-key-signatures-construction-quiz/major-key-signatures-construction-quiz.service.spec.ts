import { TestBed, inject } from '@angular/core/testing';

import { MajorKeySignaturesConstructionQuizService } from './major-key-signatures-construction-quiz.service';

describe('MajorKeySignaturesConstructionQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorKeySignaturesConstructionQuizService]
    });
  });

  it('should be created', inject([MajorKeySignaturesConstructionQuizService], (service: MajorKeySignaturesConstructionQuizService) => {
    expect(service).toBeTruthy();
  }));
});
