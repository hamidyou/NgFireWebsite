import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteQuizQuestionDisplayComponent } from './note-quiz-question-display.component';

describe('NoteQuizQuestionDisplayComponent', () => {
  let component: NoteQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<NoteQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteQuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
