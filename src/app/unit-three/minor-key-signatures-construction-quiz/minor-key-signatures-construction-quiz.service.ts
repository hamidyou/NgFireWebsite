import { Injectable } from '@angular/core';

import {MinorKeySignaturesConstructionQuizQuestionDisplayService} from './minor-key-signatures-construction-quiz-question-display/minor-key-signatures-construction-quiz-question-display.service';
import {NoteNamesService} from '../../note-names.service';

@Injectable()
export class MinorKeySignaturesConstructionQuizService {
  public accidentalsInAnswer: any;
  public correctAnswer: any;
  public correct1: boolean;
  public correct2: boolean;
  public correct3: boolean;
  public correct4: boolean;
  public correct5: boolean;
  public correct6: boolean;
  public correct7: boolean;
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public current: any;
  public accidentalsCorrect: number;
  public accidentalsIncorrect: number;
  public accidentalsAttempted: number;
  public keysCorrect: number;
  public keysIncorrect: number;
  public keysAttempted: number;
  public total: number;
  public noteNames: any;

  constructor(public _minorKeySignaturesConstructionQuizQuestionDisplayService: MinorKeySignaturesConstructionQuizQuestionDisplayService, private _noteNamesService: NoteNamesService) {
  }

  getMinorKeySignaturesConstructionQuizQuestion(): void {
    this._minorKeySignaturesConstructionQuizQuestionDisplayService.getMinorKeySignaturesConstructionQuizQuestion();
    this.accidentalsInAnswer = this._minorKeySignaturesConstructionQuizQuestionDisplayService.accidentalsInAnswer;
    this.correct1 = this._minorKeySignaturesConstructionQuizQuestionDisplayService.correct1;
    this.correct2 = this._minorKeySignaturesConstructionQuizQuestionDisplayService.correct2;
    this.correct3 = this._minorKeySignaturesConstructionQuizQuestionDisplayService.correct3;
    this.correct4 = this._minorKeySignaturesConstructionQuizQuestionDisplayService.correct4;
    this.correct5 = this._minorKeySignaturesConstructionQuizQuestionDisplayService.correct5;
    this.correct6 = this._minorKeySignaturesConstructionQuizQuestionDisplayService.correct6;
    this.correct7 = this._minorKeySignaturesConstructionQuizQuestionDisplayService.correct7;
    this.hideAnswer = this._minorKeySignaturesConstructionQuizQuestionDisplayService.hideAnswer;
    this.wrongAnswer = this._minorKeySignaturesConstructionQuizQuestionDisplayService.wrongAnswer;
    this.checkMark = this._minorKeySignaturesConstructionQuizQuestionDisplayService.checkMark;
    this.current = this._minorKeySignaturesConstructionQuizQuestionDisplayService.current;
    this.correctAnswer = this._minorKeySignaturesConstructionQuizQuestionDisplayService.correctAnswer;
  }

  setInitialQuizVariables(): void {
    this.accidentalsInAnswer = [];
    this.correct1 = false;
    this.correct2 = false;
    this.correct3 = false;
    this.correct4 = false;
    this.correct5 = false;
    this.correct6 = false;
    this.correct7 = false;
    this.hideAnswer = true;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.accidentalsCorrect = 0;
    this.accidentalsIncorrect = 0;
    this.accidentalsAttempted = 0;
    this.keysCorrect = 0;
    this.keysIncorrect = 0;
    this.keysAttempted = 0;
    this.total = 0;
  }

  getAnswerOptions(): void {
    this.noteNames = this._noteNamesService.getNoteNamesOptions();
  }

  checkAnswer1(event): void {
    this.current = this._minorKeySignaturesConstructionQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.accidentalsInKey[0]) {
      this.accidentalsInAnswer.push(value);
      this.correct1 = true;
      this.hideAnswer = false;
      this.checkMark = true;
      setTimeout(() => {
        this.checkMark = false;
        console.log('correct1 = ' + this.correct1);
        console.log('hideAnswer = ' + this.hideAnswer);
      }, 2000);
      this.accidentalsCorrect += 1;
      this.accidentalsAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.accidentalsIncorrect += 1;
    }
    this.totalPercentage();
  }

  checkAnswer2(event): void {
    this.current = this._minorKeySignaturesConstructionQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    console.log('check2');

    if (value === this.current.accidentalsInKey[1]) {
      this.accidentalsInAnswer.push(value);
      this.correct1 = false;
      this.correct2 = true;
      this.checkMark = true;
      setTimeout(() => this.checkMark = false, 2000);
      this.accidentalsCorrect += 1;
      this.accidentalsAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.accidentalsIncorrect += 1;
    }
    this.totalPercentage();
  }

  checkAnswer3(event): void {
    this.current = this._minorKeySignaturesConstructionQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.accidentalsInKey[2]) {
      this.accidentalsInAnswer.push(value);
      this.correct2 = false;
      this.correct3 = true;
      this.checkMark = true;
      setTimeout(() => this.checkMark = false, 2000);
      this.accidentalsCorrect += 1;
      this.accidentalsAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.accidentalsIncorrect += 1;
    }
    this.totalPercentage();
  }

  checkAnswer4(event): void {
    this.current = this._minorKeySignaturesConstructionQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.accidentalsInKey[3]) {
      this.accidentalsInAnswer.push(value);
      this.correct3 = false;
      this.correct4 = true;
      this.checkMark = true;
      setTimeout(() => this.checkMark = false, 2000);
      this.accidentalsCorrect += 1;
      this.accidentalsAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.accidentalsIncorrect += 1;
    }
    this.totalPercentage();
  }

  checkAnswer5(event): void {
    this.current = this._minorKeySignaturesConstructionQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.accidentalsInKey[4]) {
      this.accidentalsInAnswer.push(value);
      this.correct4 = false;
      this.correct5 = true;
      this.checkMark = true;
      setTimeout(() => this.checkMark = false, 2000);
      this.accidentalsCorrect += 1;
      this.accidentalsAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.accidentalsIncorrect += 1;
    }
    this.totalPercentage();
  }

  checkAnswer6(event): void {
    this.current = this._minorKeySignaturesConstructionQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.accidentalsInKey[5]) {
      this.accidentalsInAnswer.push(value);
      this.correct5 = false;
      this.correct6 = true;
      this.checkMark = true;
      setTimeout(() => this.checkMark = false, 2000);
      this.accidentalsCorrect += 1;
      this.accidentalsAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.accidentalsIncorrect += 1;
    }
    this.totalPercentage();
  }

  checkAnswer7(event): void {
    this.current = this._minorKeySignaturesConstructionQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.accidentalsInKey[6]) {
      this.accidentalsInAnswer.push(value);
      this.correct6 = false;
      this.correct7 = true;
      this.checkMark = true;
      setTimeout(() => this.checkMark = false, 2000);
      this.accidentalsCorrect += 1;
      this.accidentalsAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.accidentalsIncorrect += 1;
    }
    this.totalPercentage();
  }

  submit(): void {
    if (this.accidentalsInAnswer.toString() === this.current.accidentalsInKey.toString()) {
      this.correctAnswer = true;
      this.checkMark = true;
      this.correct1 = false;
      this.correct2 = false;
      this.correct3 = false;
      this.correct4 = false;
      this.correct5 = false;
      this.correct6 = false;
      this.correct7 = false;
      this.hideAnswer = true;
      setTimeout(() => {
        this.checkMark = false;
        this.correctAnswer = false;
        this.getMinorKeySignaturesConstructionQuizQuestion();
      }, 2000);
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
    if ((this.accidentalsCorrect + this.keysCorrect) > (this.accidentalsIncorrect + this.keysIncorrect)) {
      this.total = (((this.accidentalsCorrect + this.keysCorrect) - (this.accidentalsIncorrect +
        this.keysIncorrect)) / (this.accidentalsAttempted + this.keysAttempted));
    } else {
      this.total = 0;
    }
  }


}
