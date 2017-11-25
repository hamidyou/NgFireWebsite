import {inject, TestBed} from '@angular/core/testing';

import {RootPositionTriadIdentificationQuizService} from './root-position-triad-identification-quiz.service';

describe('RootPositionTriadIdentificationQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootPositionTriadIdentificationQuizService]
    });
  });

  it('should be created', inject([RootPositionTriadIdentificationQuizService], (service: RootPositionTriadIdentificationQuizService) => {
    expect(service).toBeTruthy();
  }));
});
