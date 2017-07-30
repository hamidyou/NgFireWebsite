import {Injectable} from '@angular/core';

import {OctaveClassService} from '../../octave-class.service';
import {NoteNamesService} from '../../note-names.service';
import {PianoQuiz} from './piano-quiz';
import {PianoQuizBank} from './piano-quiz-bank';
import {PianoQuizUsedBank} from './piano-quiz-used-bank';

@Injectable()
export class PianoQuizService {
  noteNames: any;
  octaveClass: any;
  inProgress: boolean;
  correctNote: boolean;
  correctOctave: boolean;
  checkMark: boolean;
  wrongAnswer: boolean;
  hideAnswer: boolean;
  notesCorrect: number;
  notesIncorrect: number;
  notesAttempted: number;
  octavesCorrect: number;
  octavesIncorrect: number;
  octavesAttempted: number;
  total: number;
  bank: any;
  usedBank: any;
  current: any;

  constructor(private _OctaveClassService: OctaveClassService, private _NoteNamesService: NoteNamesService) {
  }

  getPianoQuizBank(): PianoQuiz[] {
    return PianoQuizBank;
  }

  getPianoQuizUsedBank(): PianoQuiz[] {
    return PianoQuizUsedBank;
  }

  getPianoQuizQuestion(): void {
    this.bank = this.getPianoQuizBank();
    console.log(this.bank);
    this.usedBank = this.getPianoQuizUsedBank();
    console.log(this.usedBank);
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    this.usedBank.push(this.current);
    this.bank.splice(this.current, 1);
    console.log(this.bank);
    console.log(this.usedBank);
    this.correctNote = false;
    this.correctOctave = false;
    this.checkMark = false;
    this.wrongAnswer = false;
    this.hideAnswer = true;
  }

  setInitialPianoQuizVariables(): void {
    this.correctNote = false;
    this.correctOctave = false;
    this.checkMark = false;
    this.wrongAnswer = false;
    this.hideAnswer = true;
    this.notesCorrect = 0;
    this.notesIncorrect = 0;
    this.notesAttempted = 0;
    this.octavesCorrect = 0;
    this.octavesIncorrect = 0;
    this.octavesAttempted = 0;
    this.total = 0;
  }

  getOctaveClassOptions(): void {
    this.octaveClass = this._OctaveClassService.getOctaveClassOptions();
  }

  getNoteNamesOptions(): void {
    this.noteNames = this._NoteNamesService.getNoteNamesOptions();
  }

  getAnswerOptions(): void {
    this.getNoteNamesOptions();
    this.getOctaveClassOptions();
  }


  checkNote(event): void {
    const target = event.currentTarget;
    console.log('target = ' + target);

    const idAttr = target.attributes.id;
    console.log('idAttr = ' + idAttr);

    const value = idAttr.nodeValue;
    console.log('value = ' + value);

    if (value === this.current.note) {
      this.correctNote = true;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => this.checkMark = false,  2000);
      this.notesCorrect += 1;
      this.notesAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.notesIncorrect += 1;
    }
    this.totalPercentage();
  }

  checkOctave(event): void {
    const target = event.currentTarget;
    console.log('target = ' + target);

    const idAttr = target.attributes.id;
    console.log('idAttr = ' + idAttr);

    const value = idAttr.nodeValue;
    console.log('value = ' + value);

    console.log('current = ' + this.current);

    console.log('currentOctaveClass = ' + this.current.octaveClass);

    if (value == this.current.octaveClass) {
      this.correctOctave = true;
      this.correctNote = false;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => this.getPianoQuizQuestion(),  2000);
      this.octavesCorrect += 1;
      this.octavesAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.octavesIncorrect += 1;
    }
    this.totalPercentage();
  }

  totalPercentage(): void {
    if ((this.notesCorrect + this.octavesCorrect) > (this.notesIncorrect + this.octavesIncorrect)) {
      this.total = ((((this.notesCorrect + this.octavesCorrect) - (this.notesIncorrect + this.octavesIncorrect)) / (this.notesAttempted + this.octavesAttempted)) * 100);
    } else {
      this.total = 0;
    }
  }

}
