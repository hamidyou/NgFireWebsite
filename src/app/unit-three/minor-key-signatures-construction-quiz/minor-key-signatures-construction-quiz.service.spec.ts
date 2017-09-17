import { TestBed, inject } from '@angular/core/testing';

import { MinorKeySignaturesConstructionQuizService } from './minor-key-signatures-construction-quiz.service';

describe('MinorKeySignaturesConstructionQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorKeySignaturesConstructionQuizService]
    });
  });

  it('should be created', inject([MinorKeySignaturesConstructionQuizService], (service: MinorKeySignaturesConstructionQuizService) => {
    expect(service).toBeTruthy();
  }));
});
