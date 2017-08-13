import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteQuizAnswerOptionsComponent } from './note-quiz-answer-options.component';

describe('NoteQuizAnswerOptionsComponent', () => {
  let component: NoteQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<NoteQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteQuizAnswerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
