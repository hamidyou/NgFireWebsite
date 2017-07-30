import { TestBed, inject } from '@angular/core/testing';

import { OctaveClassService } from './octave-class.service';

describe('OctaveClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OctaveClassService]
    });
  });

  it('should be created', inject([OctaveClassService], (service: OctaveClassService) => {
    expect(service).toBeTruthy();
  }));
});
