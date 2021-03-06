import {Injectable} from '@angular/core';
import {NoteNamesService} from '../../note-names.service';
import {MinorKeySignaturesIdentificationQuizQuestionDisplayService} from './minor-key-signatures-identification-quiz-question-display/minor-key-signatures-identification-quiz-question-display.service';

@Injectable()
export class MinorKeySignaturesIdentificationQuizService {
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

  constructor(public _minorKeySignaturesIdentificationQuizQuestionDisplayService: MinorKeySignaturesIdentificationQuizQuestionDisplayService, private _noteNamesService: NoteNamesService) {
  }

  getMinorKeySignaturesIdentificationQuizQuestion(): void {
    this._minorKeySignaturesIdentificationQuizQuestionDisplayService.getMinorKeySignaturesIdentificationQuizQuestion();
    this.correctAnswer = this._minorKeySignaturesIdentificationQuizQuestionDisplayService.correctAnswer;
    this.hideAnswer = this._minorKeySignaturesIdentificationQuizQuestionDisplayService.hideAnswer;
    this.wrongAnswer = this._minorKeySignaturesIdentificationQuizQuestionDisplayService.wrongAnswer;
    this.checkMark = this._minorKeySignaturesIdentificationQuizQuestionDisplayService.checkMark;
    this.current = this._minorKeySignaturesIdentificationQuizQuestionDisplayService.current;
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
    this.current = this._minorKeySignaturesIdentificationQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.key) {
      this.correctAnswer = true;
      this.hideAnswer = false;
      this.checkMark = true;
      setTimeout(() => this.getMinorKeySignaturesIdentificationQuizQuestion(), 2000);
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
