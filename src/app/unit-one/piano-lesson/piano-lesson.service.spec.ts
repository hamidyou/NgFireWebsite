import { TestBed, inject } from '@angular/core/testing';

import { PianoLessonService } from './piano-lesson.service';

describe('PianoLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoLessonService]
    });
  });

  it('should be created', inject([PianoLessonService], (service: PianoLessonService) => {
    expect(service).toBeTruthy();
  }));
});
