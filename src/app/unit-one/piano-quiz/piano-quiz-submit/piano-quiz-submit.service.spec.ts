import { TestBed, inject } from '@angular/core/testing';

import { PianoQuizSubmitService } from './piano-quiz-submit.service';

describe('PianoQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoQuizSubmitService]
    });
  });

  it('should be created', inject([PianoQuizSubmitService], (service: PianoQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
