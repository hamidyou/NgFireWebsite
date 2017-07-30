import { TestBed, inject } from '@angular/core/testing';

import { NoteNamesService } from './note-names.service';

describe('NoteNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteNamesService]
    });
  });

  it('should be created', inject([NoteNamesService], (service: NoteNamesService) => {
    expect(service).toBeTruthy();
  }));
});
