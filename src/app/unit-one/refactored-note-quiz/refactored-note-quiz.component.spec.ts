import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RefactoredNoteQuizComponent} from './refactored-note-quiz.component';

describe('RefactoredNoteQuizComponent', () => {
  let component: RefactoredNoteQuizComponent;
  let fixture: ComponentFixture<RefactoredNoteQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefactoredNoteQuizComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefactoredNoteQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
