import {Injectable} from '@angular/core';
import {MinorKeySignaturesIdentificationQuizBank} from '../minor-key-signatures-identification-quiz-bank';
import {MinorKeySignaturesIdentificationQuizUsedBank} from '../minor-key-signatures-identification-quiz-used-bank';

@Injectable()
export class MinorKeySignaturesIdentificationQuizQuestionDisplayService {
  public correctAnswer: boolean;
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public current: any;
  public bank: any;
  public usedBank: any;

  getMinorKeySignaturesIdentificationQuizBank() {
    return MinorKeySignaturesIdentificationQuizBank;
  }

  getMinorKeySignaturesIdentificationQuizUsedBank() {
    return MinorKeySignaturesIdentificationQuizUsedBank;
  }

  getMinorKeySignaturesIdentificationQuizQuestion(): void {
    this.bank = this.getMinorKeySignaturesIdentificationQuizBank();
    this.usedBank = this.getMinorKeySignaturesIdentificationQuizUsedBank();
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    this.usedBank.push(this.current);
    this.bank.splice(this.current, 1);
    this.correctAnswer = false;
    this.hideAnswer = true;
    this.wrongAnswer = false;
    this.checkMark = false;
  }
}
