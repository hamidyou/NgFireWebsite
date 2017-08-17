import { TestBed, inject } from '@angular/core/testing';

import { MajorScaleLessonService } from './major-scale-lesson.service';

describe('MajorScaleLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorScaleLessonService]
    });
  });

  it('should be created', inject([MajorScaleLessonService], (service: MajorScaleLessonService) => {
    expect(service).toBeTruthy();
  }));
});
