import {Injectable} from '@angular/core';
import {MinorKeySignaturesConstructionQuizBank} from '../minor-key-signatures-construction-quiz-bank';
import {MinorKeySignaturesConstructionQuizUsedBank} from '../minor-key-signatures-construction-quiz-used-bank';

@Injectable()
export class MinorKeySignaturesConstructionQuizQuestionDisplayService {
  public accidentalsInAnswer: any;
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
  public bank: any;
  public usedBank: any;
  public correctAnswer: boolean;

  getMinorKeySignaturesConstructionQuizBank() {
    return MinorKeySignaturesConstructionQuizBank;
  }

  getMinorKeySignaturesConstructionQuizUsedBank() {
    return MinorKeySignaturesConstructionQuizUsedBank;
  }

  getMinorKeySignaturesConstructionQuizQuestion(): void {
    this.bank = this.getMinorKeySignaturesConstructionQuizBank();
    this.usedBank = this.getMinorKeySignaturesConstructionQuizUsedBank();
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    this.usedBank.push(this.current);
    this.bank.splice(this.current, 1);
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
    this.correctAnswer = false;
  }
}
