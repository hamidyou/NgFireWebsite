import { Injectable } from '@angular/core';

import {MinorScalesQuizBank} from '../minor-scales-quiz-bank';
import {MinorScalesQuizUsedBank} from '../minor-scales-quiz-used-bank';

@Injectable()
export class MinorScaleQuizQuestionDisplayService {
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
  public current: any;
  public bank: any;
  public usedBank: any;

  getMinorScalesQuizBank() {
    return MinorScalesQuizBank;
  }

  getMinorScalesQuizUsedBank() {
    return MinorScalesQuizUsedBank;
  }

  getMinorScaleQuizQuestion(): void {
    this.bank = this.getMinorScalesQuizBank();
    this.usedBank = this.getMinorScalesQuizUsedBank();
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    this.usedBank.push(this.current);
    this.bank.splice(this.current, 1);
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
  }

}
