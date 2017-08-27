import { TestBed, inject } from '@angular/core/testing';

import { ScaleIdentificationQuizSubmitService } from './scale-identification-quiz-submit.service';

describe('ScaleIdentificationQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScaleIdentificationQuizSubmitService]
    });
  });

  it('should be created', inject([ScaleIdentificationQuizSubmitService], (service: ScaleIdentificationQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
