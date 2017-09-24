import {inject, TestBed} from '@angular/core/testing';

import {PerfectMajorMinorIntervalIdentificationQuizSubmitService} from './perfect-major-minor-interval-identification-quiz-submit.service';

describe('PerfectMajorMinorIntervalIdentificationQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfectMajorMinorIntervalIdentificationQuizSubmitService]
    });
  });

  it('should be created', inject([PerfectMajorMinorIntervalIdentificationQuizSubmitService], (service: PerfectMajorMinorIntervalIdentificationQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
