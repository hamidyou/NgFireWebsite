import { TestBed, inject } from '@angular/core/testing';

import { NoteQuizQuestionDisplayService } from './note-quiz-question-display.service';

describe('NoteQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([NoteQuizQuestionDisplayService], (service: NoteQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
