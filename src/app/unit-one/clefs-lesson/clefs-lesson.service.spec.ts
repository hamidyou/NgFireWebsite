import { TestBed, inject } from '@angular/core/testing';

import { ClefsLessonService } from './clefs-lesson.service';

describe('ClefsLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClefsLessonService]
    });
  });

  it('should be created', inject([ClefsLessonService], (service: ClefsLessonService) => {
    expect(service).toBeTruthy();
  }));
});
