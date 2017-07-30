import { TestBed, inject } from '@angular/core/testing';

import { PianoQuizQuestionService } from './piano-quiz-question.service';

describe('PianoQuizQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoQuizQuestionService]
    });
  });

  it('should be created', inject([PianoQuizQuestionService], (service: PianoQuizQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
