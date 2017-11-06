import {Injectable} from '@angular/core';

import {IntervalConstructionQuizBank} from '../interval-construction-quiz-bank';

@Injectable()
export class IntervalConstructionQuizQuestionDisplayService {
  public pmIntervals = ['M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8'];
  public pmmIntervals = ['M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8', 'm2', 'm3', 'm6', 'm7'];
  public bank: any[];
  public usedBank: any[];
  public currentAnswerNote: string;
  public root: string;
  public current: any;
  public pm: boolean;
  public pmm: boolean;
  public all: boolean;
  public correctAnswerNote: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public questionBank: any[] = [];


  getIntervalConstructionQuizBank() {
    return IntervalConstructionQuizBank;
  }

  getIntervalConstructionQuizQuestion(): void {
    this.getIntervalConstructionQuizBank();
    if (this.pm) {
      this.bank = IntervalConstructionQuizBank;
      for (let i = 0; i < this.bank.length; i++) {
        for (let j = 0; j < this.bank[i].rootOptions.length; j++) {
          for (let k = 0; k < this.pmIntervals.length; k++) {
            if (this.bank[i].rootOptions[j].interval === this.pmIntervals[k]) {
              console.log(this.bank[i].rootOptions[j].interval + ' not ' + this.pmIntervals[k]);
              this.questionBank.push(this.bank[i].rootOptions[j]);
            }
          }
        }
      }
      console.log('running PM quiz from quiz question display service');
    } else if (this.pmm) {
      this.bank = IntervalConstructionQuizBank;
      for (let i = 0; i < this.bank.length; i++) {
        for (let j = 0; j < this.bank[i].rootOptions.length; j++) {
          for (let k = 0; k < this.pmmIntervals.length; k++) {
            while (this.bank[i].rootOptions[j].interval !== this.pmmIntervals[k]) {
              this.bank[i].rootOptions[j].splice(1, 1);
            }
          }
        }
      }
    } else {
      this.bank = IntervalConstructionQuizBank;
      console.log('else');
    }
    console.log(this.questionBank);
    this.usedBank = [];
    const rand = Math.floor(Math.random() * (this.questionBank.length));
    // const randInterval = Math.floor(Math.random() * this.questionBank[rand].rootOptions.length);
    // this.root = this.questionBank[rand].root;
    this.current = this.questionBank[rand];
    this.currentAnswerNote = this.current.answerNote;
    this.usedBank.push(this.current);
    this.questionBank.splice(this.current, 1);
    this.correctAnswerNote = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
  }

  getNextQuestion(): void {
    console.log('getNextQuestionRunning');
    const rand = Math.floor(Math.random() * (this.questionBank.length));
    // const randInterval = Math.floor(Math.random() * this.questionBank[rand].rootOptions.length);
    // this.root = this.questionBank[rand].root;
    this.current = this.questionBank[rand];
    console.log(this.questionBank.length);
    console.log(rand);
    console.log(this.current);
    console.log(this.current.answerNote);
    this.currentAnswerNote = this.current.answerNote;
    this.usedBank.push(this.current);
    this.questionBank.splice(this.current, 1);
    this.correctAnswerNote = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
  }

}
