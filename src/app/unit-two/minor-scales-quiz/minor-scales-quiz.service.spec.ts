import { TestBed, inject } from '@angular/core/testing';

import { MinorScalesQuizService } from './minor-scales-quiz.service';

describe('MinorScalesQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorScalesQuizService]
    });
  });

  it('should be created', inject([MinorScalesQuizService], (service: MinorScalesQuizService) => {
    expect(service).toBeTruthy();
  }));
});
