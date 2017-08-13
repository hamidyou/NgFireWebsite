import { TestBed, inject } from '@angular/core/testing';

import { NoteQuizSubmitService } from './note-quiz-submit.service';

describe('NoteQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteQuizSubmitService]
    });
  });

  it('should be created', inject([NoteQuizSubmitService], (service: NoteQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
