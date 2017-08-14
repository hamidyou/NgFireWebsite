import {Component, DoCheck, OnInit} from '@angular/core';
import {NoteQuizService} from '../note-quiz.service';

@Component({
  selector: 'app-note-quiz-answer-options',
  templateUrl: './note-quiz-answer-options.component.html',
  styleUrls: ['./note-quiz-answer-options.component.css']
})
export class NoteQuizAnswerOptionsComponent implements OnInit/*, DoCheck*/ {
  public current: any;
  public currentOption: any;
  public correctNote: boolean;
  public correctOctave: boolean;
  public wrongAnswer: boolean;
  public hideAnswer: boolean;
  public correctClef: boolean;
  public noteNames: any;
  public octaveClass: any;
  public clefs: any;

  constructor(private _noteQuizService: NoteQuizService) { }

  checkNote(event): void {
    this._noteQuizService.checkNote(event);
  }

  checkOctave(event): void {
    this._noteQuizService.checkOctave(event);
  }

  checkClef(event): void {
    this._noteQuizService.checkClef(event);
  }

  getQuizAnswerOptionsVariables(): void {
    this.hideAnswer = this._noteQuizService.hideAnswer;
    this.correctNote = this._noteQuizService.correctNote;
    this.correctOctave = this._noteQuizService.correctOctave;
    this.noteNames = this._noteQuizService.noteNames;
    this.octaveClass = this._noteQuizService.octaveClass;
    this.clefs = this._noteQuizService.clefs;
    this.current = this._noteQuizService.current;
    this.currentOption = this._noteQuizService.currentOption;
    this.wrongAnswer = this._noteQuizService.wrongAnswer;
    this.correctClef = this._noteQuizService.correctClef;
  }

  ngOnInit(): void {
    this.getQuizAnswerOptionsVariables();
  }
}
