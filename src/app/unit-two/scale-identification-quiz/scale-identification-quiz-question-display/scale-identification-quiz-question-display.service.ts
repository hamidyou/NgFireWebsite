import {Injectable} from '@angular/core';
import {ScaleIdentificationQuizBank} from '../scale-identification-quiz-bank';
import {ScaleIdentificationQuizUsedBank} from '../scale-identification-quiz-used-bank';

@Injectable()
export class ScaleIdentificationQuizQuestionDisplayService {
  public correctTonic: boolean;
  public correctScale: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public tonicsAttempted: number;
  public tonicsCorrect: number;
  public tonicsIncorrect: number;
  public scalesAttempted: number;
  public scalesCorrect: number;
  public scalesIncorrect: number;
  public current: any;
  public bank: any;
  public usedBank: any;

  getScaleIdentificationQuizBank() {
    return ScaleIdentificationQuizBank;
  }

  getScaleIdentificationQuizUsedBank() {
    return ScaleIdentificationQuizUsedBank;
  }

  getScaleIdentificationQuizQuestion(): void {
    this.bank = this.getScaleIdentificationQuizBank();
    this.usedBank = this.getScaleIdentificationQuizUsedBank();
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    this.usedBank.push(this.current);
    this.bank.splice(this.current, 1);
    this.tonicsAttempted = 0;
    this.tonicsCorrect = 0;
    this.tonicsIncorrect = 0;
    this.scalesAttempted = 0;
    this.scalesCorrect = 0;
    this.scalesIncorrect = 0;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
    this.correctScale = false;
    this.correctTonic = false;
  }

}
