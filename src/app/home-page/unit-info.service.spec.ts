import { TestBed, inject } from '@angular/core/testing';

import { UnitInfoService } from './unit-info.service';

describe('UnitInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitInfoService]
    });
  });

  it('should be created', inject([UnitInfoService], (service: UnitInfoService) => {
    expect(service).toBeTruthy();
  }));
});
