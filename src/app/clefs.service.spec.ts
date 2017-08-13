import { TestBed, inject } from '@angular/core/testing';

import { ClefsService } from './clefs.service';

describe('ClefsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClefsService]
    });
  });

  it('should be created', inject([ClefsService], (service: ClefsService) => {
    expect(service).toBeTruthy();
  }));
});
