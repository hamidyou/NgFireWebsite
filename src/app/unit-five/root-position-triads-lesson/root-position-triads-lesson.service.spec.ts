import {inject, TestBed} from '@angular/core/testing';

import {RootPositionTriadsLessonService} from './root-position-triads-lesson.service';

describe('RootPositionTriadsLessonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootPositionTriadsLessonService]
    });
  });

  it('should be created', inject([RootPositionTriadsLessonService], (service: RootPositionTriadsLessonService) => {
    expect(service).toBeTruthy();
  }));
});
