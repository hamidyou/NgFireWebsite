import {inject, TestBed} from '@angular/core/testing';

import {PerfectMajorMinorIntervalConstructionQuizSubmitService} from './perfect-major-minor-interval-construction-quiz-submit.service';

describe('PerfectMajorMinorIntervalConstructionQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfectMajorMinorIntervalConstructionQuizSubmitService]
    });
  });

  it('should be created', inject([PerfectMajorMinorIntervalConstructionQuizSubmitService], (service: PerfectMajorMinorIntervalConstructionQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
