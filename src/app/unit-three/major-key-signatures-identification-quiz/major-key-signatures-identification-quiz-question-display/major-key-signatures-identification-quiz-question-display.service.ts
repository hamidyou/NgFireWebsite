import {Injectable} from '@angular/core';
import {MajorKeySignaturesIdentificationQuizBank} from '../major-key-signatures-identification-quiz-bank';
import {MajorKeySignaturesIdentificationQuizUsedBank} from '../major-key-signatures-identification-quiz-used-bank';

@Injectable()
export class MajorKeySignaturesIdentificationQuizQuestionDisplayService {
  public correctAnswer: boolean;
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public keysCorrect: number;
  public keysIncorrect: number;
  public keysAttempted: number;
  public total: number;
  public current: any;
  public bank: any;
  public usedBank: any;

  getMajorKeySignaturesIdentificationQuizBank() {
    return MajorKeySignaturesIdentificationQuizBank;
  }

  getMajorKeySignaturesIdentificationQuizUsedBank() {
    return MajorKeySignaturesIdentificationQuizUsedBank;
  }

  getMajorKeySignaturesIdentificationQuizQuestion(): void {
    this.bank = this.getMajorKeySignaturesIdentificationQuizBank();
    this.usedBank = this.getMajorKeySignaturesIdentificationQuizUsedBank();
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    this.usedBank.push(this.current);
    this.bank.splice(this.current, 1);
    this.correctAnswer = false;
    this.hideAnswer = true;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.keysCorrect = 0;
    this.keysIncorrect = 0;
    this.keysAttempted = 0;
    this.total = 0;
  }
}
