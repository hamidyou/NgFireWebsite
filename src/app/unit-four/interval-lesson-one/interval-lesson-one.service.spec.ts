import {inject, TestBed} from '@angular/core/testing';

import {IntervalLessonOneService} from './interval-lesson-one.service';

describe('IntervalLessonOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalLessonOneService]
    });
  });

  it('should be created', inject([IntervalLessonOneService], (service: IntervalLessonOneService) => {
    expect(service).toBeTruthy();
  }));
});
