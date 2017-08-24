import { TestBed, inject } from '@angular/core/testing';

import { MinorScalesQuizSubmitService } from './minor-scales-quiz-submit.service';

describe('MinorScalesQuizSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinorScalesQuizSubmitService]
    });
  });

  it('should be created', inject([MinorScalesQuizSubmitService], (service: MinorScalesQuizSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
