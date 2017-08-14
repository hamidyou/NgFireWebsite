import {Component, OnInit, DoCheck, OnChanges, OnDestroy} from '@angular/core';
import {NoteQuizService} from '../note-quiz.service';
import {NoteQuizQuestionDisplayService} from './note-quiz-question-display.service';

@Component({
  selector: 'app-note-quiz-question-display',
  templateUrl: './note-quiz-question-display.component.html',
  styleUrls: ['./note-quiz-question-display.component.css']
})
export class NoteQuizQuestionDisplayComponent implements OnInit, DoCheck {
  public current: any;
  public currentOption: any;
  public correctNote: boolean;
  public correctOctave: boolean;
  public checkMark: boolean;
  public wrongAnswer: boolean;
  public hideAnswer: boolean;
  public correctClef: boolean;
  public options: any;

  constructor(private _noteQuizService: NoteQuizService, public _noteQuizQuestionDisplayService: NoteQuizQuestionDisplayService) {
  }

  checkVariables(): void {
    this.options = this._noteQuizQuestionDisplayService.options;
    this.currentOption = this._noteQuizService.currentOption;
    this.current = this._noteQuizService.current;
    this.correctNote = this._noteQuizService.correctNote;
    this.correctOctave = this._noteQuizService.correctOctave;
    this.checkMark = this._noteQuizService.checkMark;
    this.wrongAnswer = this._noteQuizService.wrongAnswer;
    this.hideAnswer = this._noteQuizService.hideAnswer;
    this.correctClef = this._noteQuizService.correctClef;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }
}
