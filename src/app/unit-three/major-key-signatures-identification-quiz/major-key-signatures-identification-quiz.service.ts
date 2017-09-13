import {Injectable} from '@angular/core';
import {NoteNamesService} from '../../note-names.service';
import {MajorKeySignaturesIdentificationQuizQuestionDisplayService} from './major-key-signatures-identification-quiz-question-display/major-key-signatures-identification-quiz-question-display.service';

@Injectable()
export class MajorKeySignaturesIdentificationQuizService {
  public correctAnswer: boolean;
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public keysCorrect: number;
  public keysIncorrect: number;
  public keysAttempted: number;
  public total: number;
  public current: any;
  public noteNames: any;

  constructor(public _majorKeySignaturesIdentificationQuizQuestionDisplayService: MajorKeySignaturesIdentificationQuizQuestionDisplayService, private _noteNamesService: NoteNamesService) {
  }

  getMajorKeySignaturesIdentificationQuizQuestion(): void {
    this._majorKeySignaturesIdentificationQuizQuestionDisplayService.getMajorKeySignaturesIdentificationQuizQuestion();
    this.correctAnswer = this._majorKeySignaturesIdentificationQuizQuestionDisplayService.correctAnswer;
    this.hideAnswer = this._majorKeySignaturesIdentificationQuizQuestionDisplayService.hideAnswer;
    this.wrongAnswer = this._majorKeySignaturesIdentificationQuizQuestionDisplayService.wrongAnswer;
    this.checkMark = this._majorKeySignaturesIdentificationQuizQuestionDisplayService.checkMark;
    this.current = this._majorKeySignaturesIdentificationQuizQuestionDisplayService.current;
  }

  setInitialQuizVariables(): void {
    this.correctAnswer = false;
    this.hideAnswer = true;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.keysCorrect = 0;
    this.keysIncorrect = 0;
    this.keysAttempted = 0;
    this.total = 0;
  }

  getAnswerOptions(): void {
    this.noteNames = this._noteNamesService.getNoteNamesOptions();
  }

  checkAnswer(event): void {
    this.current = this._majorKeySignaturesIdentificationQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.key) {
      this.correctAnswer = true;
      this.hideAnswer = false;
      this.checkMark = true;
      setTimeout(() => this.getMajorKeySignaturesIdentificationQuizQuestion(), 2000);
      this.keysCorrect += 1;
      this.keysAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.keysIncorrect += 1;
    }
    this.totalPercentage();
  }

  totalPercentage(): void {
    if (this.keysCorrect > this.keysIncorrect) {
      this.total = ((this.keysCorrect - this.keysIncorrect) / this.keysAttempted);
    } else {
      this.total = 0;
    }
  }

}
