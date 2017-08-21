import {Injectable} from '@angular/core';
import {MajorScaleQuizQuestionDisplayService} from './major-scale-quiz-question-display/major-scale-quiz-question-display.service';
import {NoteNamesService} from '../../note-names.service';
import {MajorScaleQuizCheckAnswersService} from './major-scale-quiz-check-answers.service';

@Injectable()
export class MajorScaleQuizService {
  public correct1: boolean;
  public correct2: boolean;
  public correct3: boolean;
  public correct4: boolean;
  public correct5: boolean;
  public correct6: boolean;
  public correct7: boolean;
  public correct8: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public notesAttempted: number;
  public notesCorrect: number;
  public notesIncorrect: number;
  public scalesAttempted: number;
  public total: number;
  public current: any;
  private noteNames: { natural: string[]; all: string[]; majorKeys: string[]; minorKeys: string[]; majorScales: string[] };

  constructor(public _majorScaleQuizQuestionDisplayService: MajorScaleQuizQuestionDisplayService, private _noteNamesService: NoteNamesService, private _majorScaleQuizCheckAnswersService: MajorScaleQuizCheckAnswersService) {
  }

  getMajorScaleQuizQuestion(): void {
    this._majorScaleQuizQuestionDisplayService.getMajorScaleQuizQuestion();
    this.correct1 = this._majorScaleQuizQuestionDisplayService.correct1;
    this.correct2 = this._majorScaleQuizQuestionDisplayService.correct2;
    this.correct3 = this._majorScaleQuizQuestionDisplayService.correct3;
    this.correct4 = this._majorScaleQuizQuestionDisplayService.correct4;
    this.correct5 = this._majorScaleQuizQuestionDisplayService.correct5;
    this.correct6 = this._majorScaleQuizQuestionDisplayService.correct6;
    this.correct7 = this._majorScaleQuizQuestionDisplayService.correct7;
    this.correct8 = this._majorScaleQuizQuestionDisplayService.correct8;
    this.wrongAnswer = this._majorScaleQuizQuestionDisplayService.wrongAnswer;
    this.checkMark = this._majorScaleQuizQuestionDisplayService.checkMark;
    this.hideAnswer = this._majorScaleQuizQuestionDisplayService.hideAnswer;
  }

  setInitialNoteQuizVariables(): void {
    this.correct1 = false;
    this.correct2 = false;
    this.correct3 = false;
    this.correct4 = false;
    this.correct5 = false;
    this.correct6 = false;
    this.correct7 = false;
    this.correct8 = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
    this.notesAttempted = 0;
    this.notesCorrect = 0;
    this.notesIncorrect = 0;
    this.scalesAttempted = 0;
    this.total = 0;
  }

  getAnswerOptions(): void {
    this.noteNames = this._noteNamesService.getNoteNamesOptions();
  }

  check1(event): void {
    this._majorScaleQuizCheckAnswersService.check1(event);
    this.totalPercentage();
  }

  check2(event): void {
    this._majorScaleQuizCheckAnswersService.check2(event);
    this.totalPercentage();
  }

  check3(event): void {
    this._majorScaleQuizCheckAnswersService.check3(event);
    this.totalPercentage();
  }

  check4(event): void {
    this._majorScaleQuizCheckAnswersService.check4(event);
    this.totalPercentage();
  }

  check5(event): void {
    this._majorScaleQuizCheckAnswersService.check5(event);
    this.totalPercentage();
  }

  check6(event): void {
    this._majorScaleQuizCheckAnswersService.check6(event);
    this.totalPercentage();
  }

  check7(event): void {
    this._majorScaleQuizCheckAnswersService.check7(event);
    this.totalPercentage();
  }

  check8(event): void {
    this._majorScaleQuizCheckAnswersService.check8(event);
    this.totalPercentage();
  }

  totalPercentage(): void {
    if (this.notesCorrect > this.notesIncorrect) {
      this.total = ((this.notesCorrect - this.notesIncorrect) / this.notesAttempted);
    } else {
      this.total = 0;
    }
  }


}
