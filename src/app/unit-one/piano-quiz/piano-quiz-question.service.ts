import { Injectable } from '@angular/core';
import {PianoQuiz} from './piano-quiz';
import {PianoQuizBank} from './piano-quiz-bank';
import {PianoQuizUsedBank} from './piano-quiz-used-bank';

@Injectable()
export class PianoQuizQuestionService {
  public bank: any;
  public usedBank: any;
  public current: any;
  public correctNote: boolean;
  public correctOctave: boolean;
  public checkMark: boolean;
  public wrongAnswer: boolean;
  public hideAnswer: boolean;

  constructor() { }

  getPianoQuizBank(): PianoQuiz[] {
    return PianoQuizBank;
  }

  getPianoQuizUsedBank(): PianoQuiz[] {
    return PianoQuizUsedBank;
  }

  getPianoQuizQuestion(): void {
    this.bank = this.getPianoQuizBank();
    this.usedBank = this.getPianoQuizUsedBank();
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    this.usedBank.push(this.current);
    this.bank.splice(this.current, 1);
    this.correctNote = false;
    this.correctOctave = false;
    this.checkMark = false;
    this.wrongAnswer = false;
    this.hideAnswer = true;
  }
}
