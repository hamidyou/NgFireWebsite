import {Injectable} from '@angular/core';

@Injectable()
export class RootPositionTriadConstructionQuizQuestionDisplayService {
  Mm: boolean;
  MA: boolean;
  md: boolean;
  all: boolean;
  private bank: any;
  private questionBank: any;
  private usedBank: any;
  current: any;
  currentQuality: any;
  octave: any;
  quality: string;
  root: string;
  third: string;
  fifth: string;
  private correctRoot: boolean;
  private correctThird: boolean;
  private correctFifth: boolean;
  wrongAnswer: boolean;
  checkMark: boolean;
  hideAnswer: boolean;

  getRootPositionTriadQuizBank() {
    return RootPositionTriadQuizBank;
  }

  getRootPositionTriadQuizQuestion(): void {
    this.getRootPositionTriadQuizBank();
    if (this.Mm) {
      this.bank = RootPositionTriadQuizBank;
      for (let i = 0; i < this.bank.length; i++) {
        for (let j = 0; j < this.bank.triads.length; j++) {
          if (this.bank[i].triads[j].quality !== 'Major' || 'minor') {
            this.bank.splice(this.bank[i].triads[j], 1);
          }
        }
      }
    } else if (this.MA) {
      this.bank = RootPositionTriadQuizBank;
      for (let i = 0; i < this.bank.length; i++) {
        for (let j = 0; j < this.bank.triads.length; j++) {
          if (this.bank[i].triads[j].quality !== 'Major' || 'Augmented') {
            this.bank.splice(this.bank[i].triads[j], 1);
          }
        }
      }
    } else if (this.md) {
      this.bank = RootPositionTriadQuizBank;
      for (let i = 0; i < this.bank.length; i++) {
        for (let j = 0; j < this.bank.triads.length; j++) {
          if (this.bank[i].triads[j].quality !== 'minor' || 'diminished') {
            this.bank.splice(this.bank[i].triads[j], 1);
          }
        }
      }
    } else {
      this.bank = RootPositionTriadQuizBank;
    }
    this.usedBank = [];
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    const randQuality = Math.floor(Math.random() * (this.current.triads.length));
    this.currentQuality = this.current.triads[randQuality];
    const randOctave = Math.floor((Math.random() * (this.currentQuality.octaves.length)));
    this.octave = this.currentQuality.octaves[randOctave];
    this.quality = this.currentQuality.quality;
    this.root = this.current.root;
    this.third = this.octave.third;
    this.fifth = this.octave.fifth;
    this.usedBank.push(this.octave);
    this.questionBank.splice(this.questionBank[rand], 1);
    this.correctRoot = false;
    this.correctThird = false;
    this.correctFifth = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
  }

  getNextQuestion(): void {
    const rand = Math.floor(Math.random() * (this.bank.length));
    this.current = this.bank[rand];
    const randQuality = Math.floor(Math.random() * (this.current.triads.length));
    this.currentQuality = this.current.triads[randQuality];
    const randOctave = Math.floor((Math.random() * (this.currentQuality.octaves.length)));
    this.octave = this.currentQuality.octaves[randOctave];
    this.quality = this.currentQuality.quality;
    this.root = this.current.root;
    this.third = this.octave.third;
    this.fifth = this.octave.fifth;
    this.usedBank.push(this.octave);
    this.questionBank.splice(this.questionBank[rand], 1);
    this.correctRoot = false;
    this.correctThird = false;
    this.correctFifth = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
  }
}
