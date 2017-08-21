import { TestBed, inject } from '@angular/core/testing';

import { MajorScaleQuizCheckAnswersService } from './major-scale-quiz-check-answers.service';

describe('MajorScaleQuizCheckAnswersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorScaleQuizCheckAnswersService]
    });
  });

  it('should be created', inject([MajorScaleQuizCheckAnswersService], (service: MajorScaleQuizCheckAnswersService) => {
    expect(service).toBeTruthy();
  }));
});
