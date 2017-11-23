import {Injectable} from '@angular/core';

import {IntervalConstructionQuizBank} from '../interval-construction-quiz-bank';

@Injectable()
export class IntervalConstructionQuizQuestionDisplayService {
  public pmIntervals = ['M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8'];
  public pmmIntervals = ['M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8', 'm2', 'm3', 'm6', 'm7'];
  public allIntervals = ['M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8', 'm2', 'm3', 'm6', 'm7', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'];
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
              this.questionBank.push(this.bank[i].rootOptions[j]);
            }
          }
        }
      }
    } else if (this.pmm) {
      this.bank = IntervalConstructionQuizBank;
      for (let i = 0; i < this.bank.length; i++) {
        for (let j = 0; j < this.bank[i].rootOptions.length; j++) {
          for (let k = 0; k < this.pmmIntervals.length; k++) {
            if (this.bank[i].rootOptions[j].interval === this.pmmIntervals[k]) {
              this.questionBank.push(this.bank[i].rootOptions[j]);
            }
          }
        }
      }
    } else {
      this.bank = IntervalConstructionQuizBank;
      for (let i = 0; i < this.bank.length; i++) {
        for (let j = 0; j < this.bank[i].rootOptions.length; j++) {
          for (let k = 0; k < this.allIntervals.length; k++) {
            if (this.bank[i].rootOptions[j].interval === this.allIntervals[k]) {
              this.questionBank.push(this.bank[i].rootOptions[j]);
            }
          }
        }
      }
      console.log('else');
    }
    this.usedBank = [];
    const rand = Math.floor(Math.random() * (this.questionBank.length));
    this.current = this.questionBank[rand];
    this.currentAnswerNote = this.current.answerNote;
    this.usedBank.push(this.current);
    this.questionBank.splice(this.questionBank[rand], 1);
    this.correctAnswerNote = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
  }

  getNextQuestion(): void {
    const rand = Math.floor(Math.random() * (this.questionBank.length));
    this.current = this.questionBank[rand];
    this.currentAnswerNote = this.current.answerNote;
    this.usedBank.push(this.current);
    this.questionBank.splice(this.current, 1);
    this.correctAnswerNote = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
  }

}
