import { TestBed, inject } from '@angular/core/testing';

import { MajorKeySignaturesLessonService } from './major-key-signatures-lesson.service';

describe('MajorKeySignaturesLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorKeySignaturesLessonService]
    });
  });

  it('should be created', inject([MajorKeySignaturesLessonService], (service: MajorKeySignaturesLessonService) => {
    expect(service).toBeTruthy();
  }));
});
