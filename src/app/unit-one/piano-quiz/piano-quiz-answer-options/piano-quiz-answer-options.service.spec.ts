import { TestBed, inject } from '@angular/core/testing';

import { PianoQuizAnswerOptionsService } from './piano-quiz-answer-options.service';

describe('PianoQuizAnswerOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoQuizAnswerOptionsService]
    });
  });

  it('should be created', inject([PianoQuizAnswerOptionsService], (service: PianoQuizAnswerOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
