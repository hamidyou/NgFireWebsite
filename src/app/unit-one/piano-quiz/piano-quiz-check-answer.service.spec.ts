import { TestBed, inject } from '@angular/core/testing';

import { PianoQuizCheckAnswerService } from './piano-quiz-check-answer.service';

describe('PianoQuizCheckAnswerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoQuizCheckAnswerService]
    });
  });

  it('should be created', inject([PianoQuizCheckAnswerService], (service: PianoQuizCheckAnswerService) => {
    expect(service).toBeTruthy();
  }));
});
