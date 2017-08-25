import { TestBed, inject } from '@angular/core/testing';

import { ScaleDegreesLessonService } from './scale-degrees-lesson.service';

describe('ScaleDegreesLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScaleDegreesLessonService]
    });
  });

  it('should be created', inject([ScaleDegreesLessonService], (service: ScaleDegreesLessonService) => {
    expect(service).toBeTruthy();
  }));
});
