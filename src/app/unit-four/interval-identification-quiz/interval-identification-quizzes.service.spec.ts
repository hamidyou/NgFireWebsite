import {inject, TestBed} from '@angular/core/testing';

import {IntervalIdentificationQuizzesService} from './interval-identification-quizzes.service';

describe('IntervalIdentificationQuizzesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalIdentificationQuizzesService]
    });
  });

  it('should be created', inject([IntervalIdentificationQuizzesService], (service: IntervalIdentificationQuizzesService) => {
    expect(service).toBeTruthy();
  }));
});
