import {inject, TestBed} from '@angular/core/testing';

import {AllIntervalIdentificationQuizSubmitService} from './all-interval-identification-quiz-submit.service';

describe('AllIntervalIdentificationQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllIntervalIdentificationQuizSubmitService]
    });
  });

  it('should be created', inject([AllIntervalIdentificationQuizSubmitService], (service: AllIntervalIdentificationQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
