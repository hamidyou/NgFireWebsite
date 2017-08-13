import { Component, OnInit } from '@angular/core';
import {NoteQuizAnswerOptionsComponent} from './note-quiz-answer-options/note-quiz-answer-options.component';
import {NoteQuizQuestionDisplayComponent} from './note-quiz-question-display/note-quiz-question-display.component';
import {NoteQuizScoringComponent} from './note-quiz-scoring/note-quiz-scoring.component';
import {NoteQuizSubmitComponent} from './note-quiz-submit/note-quiz-submit.component';
import {NoteQuizService} from './note-quiz.service';
import {NoteQuizSubmitService} from './note-quiz-submit/note-quiz-submit.service';
import {NoteQuizQuestionDisplayService} from './note-quiz-question-display/note-quiz-question-display.service';

@Component({
  selector: 'app-note-quiz',
  templateUrl: './note-quiz.component.html',
  styleUrls: ['./note-quiz.component.css'],
  entryComponents: [NoteQuizAnswerOptionsComponent, NoteQuizQuestionDisplayComponent, NoteQuizScoringComponent, NoteQuizSubmitComponent],
  providers: [NoteQuizService, NoteQuizSubmitService, NoteQuizQuestionDisplayService]
})
export class NoteQuizComponent implements OnInit {
  total: number = this._noteQuizService.total;

  constructor(private _noteQuizService: NoteQuizService) { }

  startQuiz(): void {
    this._noteQuizService.getNoteQuizQuestion();
    this._noteQuizService.setInitialNoteQuizVariables();
    this._noteQuizService.getAnswerOptions();
    this.total = 0;
  }

  ngOnInit(): void {
    this.startQuiz();
  }

}
