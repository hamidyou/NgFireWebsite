import { TestBed, inject } from '@angular/core/testing';

import { MinorKeySignaturesLessonService } from './minor-key-signatures-lesson.service';

describe('MinorKeySignaturesLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorKeySignaturesLessonService]
    });
  });

  it('should be created', inject([MinorKeySignaturesLessonService], (service: MinorKeySignaturesLessonService) => {
    expect(service).toBeTruthy();
  }));
});
