import {Injectable} from '@angular/core';
import {IntervalIdentificationQuizzesQuestionDisplayService} from './interval-identification-quizzes-question-display/interval-identification-quizzes-question-display.service';

@Injectable()
export class IntervalIdentificationQuizzesService {
  public current: any;
  public correctQuantity: boolean;
  public correctQuality: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public quantitiesAttempted: number;
  public quantitiesCorrect: number;
  public quantitiesIncorrect: number;
  public qualitiesAttempted: number;
  public qualitiesCorrect: number;
  public qualitiesIncorrect: number;
  public intervalsAttempted: number;
  public total: number;
  public intervalQualities = ['diminished', 'minor', 'Major', 'Perfect', 'Augmented'];
  public intervalQuantities = ['2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
  public currentQuantity: string;
  public currentQuality: string;
  public perfectMajor: boolean;
  public perfectMajorMinor: boolean;

  constructor(public _intervalIdentificationQuizzesQuestionDisplayService: IntervalIdentificationQuizzesQuestionDisplayService) {
  }

  getPerfectMajorIntervalIdentificaionQuizQuestion(): void {
    this._intervalIdentificationQuizzesQuestionDisplayService.getPerfectMajorIntervalIdentificationQuizQuestion();
    this.correctQuantity = this._intervalIdentificationQuizzesQuestionDisplayService.correctQuantity;
    this.correctQuality = this._intervalIdentificationQuizzesQuestionDisplayService.correctQuality;
    this.wrongAnswer = this._intervalIdentificationQuizzesQuestionDisplayService.wrongAnswer;
    this.checkMark = this._intervalIdentificationQuizzesQuestionDisplayService.checkMark;
    this.hideAnswer = this._intervalIdentificationQuizzesQuestionDisplayService.hideAnswer;
    this.current = this._intervalIdentificationQuizzesQuestionDisplayService.current;
    this.perfectMajor = true;
  }

  getPerfectMajorMinorIntervalIdentificaionQuizQuestion(): void {
    this._intervalIdentificationQuizzesQuestionDisplayService.getPerfectMajorMinorIntervalIdentificationQuizQuestion();
    this.correctQuantity = this._intervalIdentificationQuizzesQuestionDisplayService.correctQuantity;
    this.correctQuality = this._intervalIdentificationQuizzesQuestionDisplayService.correctQuality;
    this.wrongAnswer = this._intervalIdentificationQuizzesQuestionDisplayService.wrongAnswer;
    this.checkMark = this._intervalIdentificationQuizzesQuestionDisplayService.checkMark;
    this.hideAnswer = this._intervalIdentificationQuizzesQuestionDisplayService.hideAnswer;
    this.current = this._intervalIdentificationQuizzesQuestionDisplayService.current;
    this.perfectMajorMinor = true;
  }

  getAllIntervalIdentificationQuizQuestion(): void {
    this._intervalIdentificationQuizzesQuestionDisplayService.getAllIntervalIdentificationQuizQuestion();
    this.correctQuantity = this._intervalIdentificationQuizzesQuestionDisplayService.correctQuantity;
    this.correctQuality = this._intervalIdentificationQuizzesQuestionDisplayService.correctQuality;
    this.wrongAnswer = this._intervalIdentificationQuizzesQuestionDisplayService.wrongAnswer;
    this.checkMark = this._intervalIdentificationQuizzesQuestionDisplayService.checkMark;
    this.hideAnswer = this._intervalIdentificationQuizzesQuestionDisplayService.hideAnswer;
    this.current = this._intervalIdentificationQuizzesQuestionDisplayService.current;
  }

  setInitialQuizVariables(): void {
    this.correctQuantity = false;
    this.correctQuality = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
    this.quantitiesAttempted = 0;
    this.quantitiesCorrect = 0;
    this.quantitiesIncorrect = 0;
    this.qualitiesAttempted = 0;
    this.qualitiesCorrect = 0;
    this.qualitiesIncorrect = 0;
    this.intervalsAttempted = 0;
    this.total = 0;
  }

  getQuantityAnswerOptions(): any {
    return this.intervalQuantities;
  }

  getQualityAnswerOptions(): any {
    return this.intervalQualities;
  }

  checkQuantity(event): void {
    this.currentQuantity = this._intervalIdentificationQuizzesQuestionDisplayService.currentQuantity;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.currentQuantity) {
      this.correctQuantity = true;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => {
        this.checkMark = false;
      }, 2000);
      this.quantitiesCorrect += 1;
      this.quantitiesAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 2000);
      this.quantitiesIncorrect += 1;
      this.quantitiesAttempted += 1;
    }
    this.totalPercentage();
  }

  checkQuality(event): void {
    this.currentQuality = this._intervalIdentificationQuizzesQuestionDisplayService.currentQuality;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.currentQuality) {
      this.correctQuantity = false;
      this.correctQuality = true;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => {
        this.checkMark = false;
        if (this.perfectMajor) {
          this.getPerfectMajorIntervalIdentificaionQuizQuestion();
        } else if (this.perfectMajorMinor) {
          this.getPerfectMajorMinorIntervalIdentificaionQuizQuestion();
        } else {
          this.getAllIntervalIdentificationQuizQuestion();
        }
      }, 2000);
      this.qualitiesCorrect += 1;
      this.qualitiesAttempted += 1;
      this.intervalsAttempted += 1;
      this.totalPercentage();
    } else {
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 2000);
      this.qualitiesIncorrect += 1;
      this.qualitiesAttempted += 1;
    }
    this.totalPercentage();
  }

  totalPercentage(): void {
    if ((this.quantitiesCorrect + this.qualitiesCorrect) > (this.quantitiesIncorrect + this.qualitiesIncorrect)) {
      this.total = (((this.quantitiesCorrect + this.qualitiesCorrect) - (this.quantitiesIncorrect +
        this.qualitiesIncorrect)) / (this.quantitiesAttempted + this.qualitiesAttempted));
    } else {
      this.total = 0;
    }
  };


}
