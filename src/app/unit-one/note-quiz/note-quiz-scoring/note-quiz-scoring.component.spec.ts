import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteQuizScoringComponent } from './note-quiz-scoring.component';

describe('NoteQuizScoringComponent', () => {
  let component: NoteQuizScoringComponent;
  let fixture: ComponentFixture<NoteQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteQuizScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
