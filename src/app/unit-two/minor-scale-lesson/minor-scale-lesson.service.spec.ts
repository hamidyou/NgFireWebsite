import { TestBed, inject } from '@angular/core/testing';

import { MinorScaleLessonService } from './minor-scale-lesson.service';

describe('MinorScaleLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorScaleLessonService]
    });
  });

  it('should be created', inject([MinorScaleLessonService], (service: MinorScaleLessonService) => {
    expect(service).toBeTruthy();
  }));
});
