import {inject, TestBed} from '@angular/core/testing';

import {IntervalConstructionQuizService} from './interval-construction-quiz.service';

describe('IntervalConstructionQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalConstructionQuizService]
    });
  });

  it('should be created', inject([IntervalConstructionQuizService], (service: IntervalConstructionQuizService) => {
    expect(service).toBeTruthy();
  }));
});
