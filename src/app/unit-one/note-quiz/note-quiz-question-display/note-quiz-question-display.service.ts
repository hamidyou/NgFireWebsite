import { Injectable } from '@angular/core';
import {NoteQuiz} from '../note-quiz';
import {NoteQuizBank} from '../note-quiz-bank';
import {NoteQuizUsedBank} from '../note-quiz-used-bank';

@Injectable()
export class NoteQuizQuestionDisplayService {
  public currentOption: any;
  public current: any;
  public correctNote: boolean;
  public correctOctave: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public correctClef: boolean;
  public bank: any;
  public usedBank: any;
  public remove: any;
  public options = [
    {name: 'Alto Clef', value: '2', checked: true},
    {name: 'Bass Clef', value: '1', checked: true},
    {name: 'Tenor Clef', value: '3', checked: true},
    {name: 'Treble Clef', value: '0', checked: true},
  ];

  constructor() { }

  get selectedOptions() { // right now: ['1','3']
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.value);
  }

  getNoteQuizBank() {
    return NoteQuizBank;
  }

  getNoteQuizUsedBank() {
    return NoteQuizUsedBank;
}

  getNoteQuizQuestion(): void {
    this.bank = this.getNoteQuizBank();
    this.usedBank = this.getNoteQuizUsedBank();
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    const rand2 = Math.floor(Math.random() * this.current.options.length);
    this.currentOption = this.current.options[rand2];
    this.usedBank.push(this.currentOption);
    this.current.options.splice(this.currentOption, 1);
    this.hideAnswer = true;
    this.correctClef = false;
    this.correctNote = false;
    this.correctOctave = false;
    this.checkMark = false;
    this.wrongAnswer = false;
    console.log(this.bank);
    console.log(this.usedBank);
    console.log(this.current);
    console.log(this.currentOption);
    console.log(this.current.options[rand2]);
  }

}
