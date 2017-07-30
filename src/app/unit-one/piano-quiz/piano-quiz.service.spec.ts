import { TestBed, inject } from '@angular/core/testing';

import { PianoQuizService } from './piano-quiz.service';

describe('PianoQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoQuizService]
    });
  });

  it('should be created', inject([PianoQuizService], (service: PianoQuizService) => {
    expect(service).toBeTruthy();
  }));
});
