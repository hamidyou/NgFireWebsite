import {Injectable} from '@angular/core';
import {NoteNamesService} from '../../note-names.service';
import {OctaveClassService} from '../../octave-class.service';
import {NoteQuizQuestionDisplayService} from './note-quiz-question-display/note-quiz-question-display.service';
import {ClefsService} from '../../clefs.service';

@Injectable()
export class NoteQuizService {
  public currentOption: any;
  public clefs: any;
  public noteNames: any;
  public octaveClass: any;
  public current: any;
  public correctNote: boolean;
  public correctOctave: boolean;
  public checkMark: boolean;
  public wrongAnswer: boolean;
  public hideAnswer: boolean;
  public correctClef: boolean;
  public notesCorrect: number;
  public notesIncorrect: number;
  public notesAttempted: number;
  public octavesCorrect: number;
  public octavesIncorrect: number;
  public octavesAttempted: number;
  public total: number;
  public clefsAttempted: number;
  public clefsCorrect: number;
  public clefsIncorrect: number;

  constructor(private _octaveClassService: OctaveClassService, private _noteNamesService: NoteNamesService, private _noteQuizQuestionDisplayService: NoteQuizQuestionDisplayService, private _clefsService: ClefsService) {
  }

  getNoteQuizQuestion(): void {
    this._noteQuizQuestionDisplayService.getNoteQuizQuestion();
    this.currentOption = this._noteQuizQuestionDisplayService.currentOption;
    this.current = this._noteQuizQuestionDisplayService.current;
    this.correctNote = this._noteQuizQuestionDisplayService.correctNote;
    this.correctOctave = this._noteQuizQuestionDisplayService.correctOctave;
    this.checkMark = this._noteQuizQuestionDisplayService.checkMark;
    this.wrongAnswer = this._noteQuizQuestionDisplayService.wrongAnswer;
    this.hideAnswer = this._noteQuizQuestionDisplayService.hideAnswer;
    this.correctClef = this._noteQuizQuestionDisplayService.correctClef;
  }

  setInitialNoteQuizVariables(): void {
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
    this.clefsAttempted = 0;
    this.clefsCorrect = 0;
    this.clefsIncorrect = 0;
    this.total = 0;
  }

  getAnswerOptions(): void {
    this.noteNames = this._noteNamesService.getNoteNamesOptions();
    this.octaveClass = this._octaveClassService.getOctaveClassOptions();
    this.clefs = this._clefsService.getClefOptions();
  }

  checkClef(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.clef) {
      this.correctClef = true;
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

  checkNote(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.currentOption.note) {
      this.correctNote = true;
      this.correctClef = false;
      this.checkMark = true;
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

    if (value == this.currentOption.octaveClass) {
      this.correctOctave = true;
      this.correctNote = false;
      this.checkMark = true;
      setTimeout(() => this.getNoteQuizQuestion(), 2000);
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
