import {inject, TestBed} from '@angular/core/testing';

import {RootPositionTriadConstructionQuizQuestionDisplayService} from './root-position-triad-construction-quiz-question-display.service';

describe('RootPositionTriadConstructionQuizQuestionDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootPositionTriadConstructionQuizQuestionDisplayService]
    });
  });

  it('should be created', inject([RootPositionTriadConstructionQuizQuestionDisplayService], (service: RootPositionTriadConstructionQuizQuestionDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
