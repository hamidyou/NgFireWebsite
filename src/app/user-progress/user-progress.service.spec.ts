import { TestBed, inject } from '@angular/core/testing';

import { UserProgressService } from './user-progress.service';

describe('UserProgressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProgressService]
    });
  });

  it('should be created', inject([UserProgressService], (service: UserProgressService) => {
    expect(service).toBeTruthy();
  }));
});
