import {inject, TestBed} from '@angular/core/testing';

import {RootPositionTriadConstructionQuizService} from './root-position-triad-construction-quiz.service';

describe('RootPositionTriadConstructionQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootPositionTriadConstructionQuizService]
    });
  });

  it('should be created', inject([RootPositionTriadConstructionQuizService], (service: RootPositionTriadConstructionQuizService) => {
    expect(service).toBeTruthy();
  }));
});
