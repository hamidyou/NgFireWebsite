import { TestBed, inject } from '@angular/core/testing';

import { MajorScaleQuizService } from './major-scale-quiz.service';

describe('MajorScaleQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorScaleQuizService]
    });
  });

  it('should be created', inject([MajorScaleQuizService], (service: MajorScaleQuizService) => {
    expect(service).toBeTruthy();
  }));
});
