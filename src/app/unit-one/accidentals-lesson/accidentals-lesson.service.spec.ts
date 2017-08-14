import { TestBed, inject } from '@angular/core/testing';

import { AccidentalsLessonService } from './accidentals-lesson.service';

describe('AccidentalsLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentalsLessonService]
    });
  });

  it('should be created', inject([AccidentalsLessonService], (service: AccidentalsLessonService) => {
    expect(service).toBeTruthy();
  }));
});
