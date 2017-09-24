import {inject, TestBed} from '@angular/core/testing';

import {PerfectMajorIntervalIdentificationQuizSubmitService} from './perfect-major-interval-identification-quiz-submit.service';

describe('PerfectMajorIntervalIdentificationQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfectMajorIntervalIdentificationQuizSubmitService]
    });
  });

  it('should be created', inject([PerfectMajorIntervalIdentificationQuizSubmitService], (service: PerfectMajorIntervalIdentificationQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
