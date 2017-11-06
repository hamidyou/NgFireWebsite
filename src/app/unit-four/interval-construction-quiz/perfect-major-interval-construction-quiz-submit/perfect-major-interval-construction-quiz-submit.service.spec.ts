import {inject, TestBed} from '@angular/core/testing';

import {PerfectMajorIntervalConstructionQuizSubmitService} from './perfect-major-interval-construction-quiz-submit.service';

describe('PerfectMajorIntervalConstructionQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfectMajorIntervalConstructionQuizSubmitService]
    });
  });

  it('should be created', inject([PerfectMajorIntervalConstructionQuizSubmitService], (service: PerfectMajorIntervalConstructionQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
