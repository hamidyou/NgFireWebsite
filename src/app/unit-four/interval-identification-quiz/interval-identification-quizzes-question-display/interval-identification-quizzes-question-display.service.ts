import {Injectable} from '@angular/core';
import {IntervalIdentificationQuizzesBank} from '../interval-identification-quizzes-bank';

@Injectable()
export class IntervalIdentificationQuizzesQuestionDisplayService {
  public currentQuality: any;
  public currentQuantity: any;
  public correctQuantity: boolean;
  public correctQuality: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public total: number;
  public bank: any;
  public quantityBank: any;
  public usedBank: any;
  public current: any;

  getPerfectMajorIntervalIdentificationQuizBank() {
    return [IntervalIdentificationQuizzesBank.perfect, IntervalIdentificationQuizzesBank.major];
  }

  getPerfectMajorMinorIntervalIdentificationQuizBank() {
    return [IntervalIdentificationQuizzesBank.perfect, IntervalIdentificationQuizzesBank.major, IntervalIdentificationQuizzesBank.minor];
  }

  getAllIntervalIdentificationQuizBank() {
    return IntervalIdentificationQuizzesBank;
  }

  getPerfectMajorIntervalIdentificationQuizQuestion(): void {
    console.log('get PMQuiz');
    this.bank = this.getPerfectMajorIntervalIdentificationQuizBank();
    this.usedBank = [];
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.quantityBank = this.bank[rand];
    const randQuantity = Math.floor(Math.random() * (this.quantityBank.length));
    const randInterval = Math.floor(Math.random() * (this.quantityBank[randQuantity].intervals.length));
    this.current = this.quantityBank[randQuantity].intervals[randInterval];
    this.currentQuantity = this.quantityBank[randQuantity].quantity;
    this.currentQuality = this.quantityBank[randQuantity].quality;
    console.log('bank = ' + this.bank);
    console.log('usedbank = ' + this.usedBank);
    console.log('quantitybank = ' + this.quantityBank);
    console.log('current = ' + this.current.image);
    console.log('currentQuantity = ' + this.currentQuantity);
    console.log('currentQuality = ' + this.currentQuality);
    this.usedBank.push(this.current);
    this.quantityBank[randQuantity].intervals.splice(this.current, 1);
    this.correctQuantity = false;
    this.correctQuality = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
  }

  getPerfectMajorMinorIntervalIdentificationQuizQuestion(): void {
    this.bank = this.getPerfectMajorMinorIntervalIdentificationQuizBank();
    this.usedBank = [];
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.quantityBank = this.bank[rand];
    const randQuantity = Math.floor(Math.random() * (this.quantityBank.length));
    const randInterval = Math.floor(Math.random() * (this.quantityBank[randQuantity].intervals.length));
    this.current = this.quantityBank[randQuantity].intervals[randInterval];
    this.currentQuantity = this.quantityBank[randQuantity].quantity;
    this.currentQuality = this.quantityBank[randQuantity].quality;
    this.usedBank.push(this.current);
    this.quantityBank[randQuantity].intervals.splice(this.current, 1);
    this.correctQuantity = false;
    this.correctQuality = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
  }

  getAllIntervalIdentificationQuizQuestion(): void {
    this.bank = this.getAllIntervalIdentificationQuizBank();
    this.usedBank = [];
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.quantityBank = this.bank[rand];
    const randQuantity = Math.floor(Math.random() * (this.quantityBank.length));
    const randInterval = Math.floor(Math.random() * (this.quantityBank[randQuantity].intervals.length));
    this.current = this.quantityBank[randQuantity].intervals[randInterval];
    this.currentQuantity = this.quantityBank[randQuantity].quantity;
    this.currentQuality = this.quantityBank[randQuantity].quality;
    this.usedBank.push(this.current);
    this.quantityBank[randQuantity].intervals.splice(this.current, 1);
    this.correctQuantity = false;
    this.correctQuality = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
  }

}
