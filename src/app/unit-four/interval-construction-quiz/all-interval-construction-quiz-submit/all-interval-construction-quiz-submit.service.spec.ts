import {inject, TestBed} from '@angular/core/testing';

import {AllIntervalConstructionQuizSubmitService} from './all-interval-construction-quiz-submit.service';

describe('AllIntervalConstructionQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllIntervalConstructionQuizSubmitService]
    });
  });

  it('should be created', inject([AllIntervalConstructionQuizSubmitService], (service: AllIntervalConstructionQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
