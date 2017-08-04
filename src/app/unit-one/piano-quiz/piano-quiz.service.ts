import {Injectable} from '@angular/core';
import {NoteNamesService} from '../../note-names.service';

import {OctaveClassService} from '../../octave-class.service';
import {PianoQuizQuestionService} from './piano-quiz-question-display/piano-quiz-question.service';

@Injectable()
export class PianoQuizService {
  public noteNames: any;
  public octaveClass: any;
  public inProgress: boolean;
  public correctNote: boolean;
  public correctOctave: boolean;
  public checkMark: boolean;
  public wrongAnswer: boolean;
  public hideAnswer: boolean;
  public notesCorrect: number;
  public notesIncorrect: number;
  public notesAttempted: number;
  public octavesCorrect: number;
  public octavesIncorrect: number;
  public octavesAttempted: number;
  public total: any;
  public current: any;

  constructor(private _OctaveClassService: OctaveClassService, private _NoteNamesService: NoteNamesService, private _pianoQuizQuestionService: PianoQuizQuestionService) {
  }

  getPianoQuizQuestion(): void {
    this._pianoQuizQuestionService.getPianoQuizQuestion();
    this.current = this._pianoQuizQuestionService.current;
    this.correctNote = this._pianoQuizQuestionService.correctNote;
    this.correctOctave = this._pianoQuizQuestionService.correctOctave;
    this.wrongAnswer = this._pianoQuizQuestionService.wrongAnswer;
    this.checkMark = this._pianoQuizQuestionService.checkMark;
    this.hideAnswer = this._pianoQuizQuestionService.hideAnswer;
  }

  setInitialPianoQuizVariables(): void {
    this.correctNote = false;
    this.correctOctave = false;
    this.checkMark = false;
    this.wrongAnswer = false;
    this.hideAnswer = true;
    this.notesCorrect = 0;
    this.notesIncorrect = 0;
    this.notesAttempted = 0;
    this.octavesCorrect = 0;
    this.octavesIncorrect = 0;
    this.octavesAttempted = 0;
    this.total = 0;
  }

  getOctaveClassOptions(): void {
    this.octaveClass = this._OctaveClassService.getOctaveClassOptions();
  }

  getNoteNamesOptions(): void {
    this.noteNames = this._NoteNamesService.getNoteNamesOptions();
  }

  getAnswerOptions(): void {
    this.getNoteNamesOptions();
    this.getOctaveClassOptions();
  }

  checkNote(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.note) {
      this.correctNote = true;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => this.checkMark = false, 2000);
      this.notesCorrect += 1;
      this.notesAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.notesIncorrect += 1;
    }
    this.totalPercentage();
  }

  checkOctave(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value: number = idAttr.nodeValue;

    if (value == this.current.octaveClass) {
      this.correctOctave = true;
      this.correctNote = false;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => this.getPianoQuizQuestion(), 2000);
      this.octavesCorrect += 1;
      this.octavesAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.octavesIncorrect += 1;
    }
    this.totalPercentage();
  }

  totalPercentage(): void {
    if ((this.notesCorrect + this.octavesCorrect) > (this.notesIncorrect + this.octavesIncorrect)) {
      this.total = (((this.notesCorrect + this.octavesCorrect) - (this.notesIncorrect + this.octavesIncorrect)) / (this.notesAttempted + this.octavesAttempted));
    } else {
      this.total = 0;
    }
  }

}
