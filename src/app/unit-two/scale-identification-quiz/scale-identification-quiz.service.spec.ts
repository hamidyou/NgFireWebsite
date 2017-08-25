import { TestBed, inject } from '@angular/core/testing';

import { ScaleIdentificationQuizService } from './scale-identification-quiz.service';

describe('ScaleIdentificationQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScaleIdentificationQuizService]
    });
  });

  it('should be created', inject([ScaleIdentificationQuizService], (service: ScaleIdentificationQuizService) => {
    expect(service).toBeTruthy();
  }));
});
