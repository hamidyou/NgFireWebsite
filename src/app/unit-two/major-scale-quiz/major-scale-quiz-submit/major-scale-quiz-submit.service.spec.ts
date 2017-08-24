import { TestBed, inject } from '@angular/core/testing';

import { MajorScaleQuizSubmitService } from './major-scale-quiz-submit.service';

describe('MajorScaleQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorScaleQuizSubmitService]
    });
  });

  it('should be created', inject([MajorScaleQuizSubmitService], (service: MajorScaleQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
