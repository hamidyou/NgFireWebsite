import {inject, TestBed} from '@angular/core/testing';

import {RootPositionTriadIdentificationQuizQuestionDisplayService} from './root-position-triad-identification-quiz-question-display.service';

describe('RootPositionTriadIdentificationQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootPositionTriadIdentificationQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([RootPositionTriadIdentificationQuizQuestionDisplayService], (service: RootPositionTriadIdentificationQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
