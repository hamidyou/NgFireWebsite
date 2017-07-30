import { TestBed, inject } from '@angular/core/testing';

import { PianoQuizVariablesService } from './piano-quiz-variables.service';

describe('PianoQuizVariablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PianoQuizVariablesService]
    });
  });

  it('should be created', inject([PianoQuizVariablesService], (service: PianoQuizVariablesService) => {
    expect(service).toBeTruthy();
  }));
});
