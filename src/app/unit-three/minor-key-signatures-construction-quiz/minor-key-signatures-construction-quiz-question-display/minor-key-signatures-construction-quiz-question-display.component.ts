import {Component, DoCheck, OnInit} from '@angular/core';

import {MinorKeySignaturesConstructionQuizService} from '../minor-key-signatures-construction-quiz.service';
import {MinorKeySignaturesConstructionQuizQuestionDisplayService} from './minor-key-signatures-construction-quiz-question-display.service';

@Component({
  selector: 'app-minor-key-signatures-construction-quiz-question-display',
  templateUrl: './minor-key-signatures-construction-quiz-question-display.component.html',
  styleUrls: ['./minor-key-signatures-construction-quiz-question-display.component.css']
})
export class MinorKeySignaturesConstructionQuizQuestionDisplayComponent implements OnInit, DoCheck {
  public correct1: boolean;
  public correct2: boolean;
  public correct3: boolean;
  public correct4: boolean;
  public correct5: boolean;
  public correct6: boolean;
  public correct7: boolean;
  public correctAnswer: boolean;
  public accidentalsInAnswer: any;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public current: any;
  public bank: any;
  public usedBank: any;

  constructor(private _minorKeySignaturesConstructionQuizService: MinorKeySignaturesConstructionQuizService, private _minorKeySignaturesConstructionQuizQuestionDisplayService: MinorKeySignaturesConstructionQuizQuestionDisplayService) {
  }

  checkVariables(): void {
    this.correct1 = this._minorKeySignaturesConstructionQuizService.correct1;
    this.correct2 = this._minorKeySignaturesConstructionQuizService.correct2;
    this.correct3 = this._minorKeySignaturesConstructionQuizService.correct3;
    this.correct4 = this._minorKeySignaturesConstructionQuizService.correct4;
    this.correct5 = this._minorKeySignaturesConstructionQuizService.correct5;
    this.correct6 = this._minorKeySignaturesConstructionQuizService.correct6;
    this.correct7 = this._minorKeySignaturesConstructionQuizService.correct7;
    this.correctAnswer = this._minorKeySignaturesConstructionQuizService.correctAnswer;
    this.accidentalsInAnswer = this._minorKeySignaturesConstructionQuizService.accidentalsInAnswer;
    this.wrongAnswer = this._minorKeySignaturesConstructionQuizService.wrongAnswer;
    this.checkMark = this._minorKeySignaturesConstructionQuizService.checkMark;
    this.hideAnswer = this._minorKeySignaturesConstructionQuizService.hideAnswer;
    this.current = this._minorKeySignaturesConstructionQuizService.current;
    this.bank = this._minorKeySignaturesConstructionQuizQuestionDisplayService.bank;
    this.usedBank = this._minorKeySignaturesConstructionQuizQuestionDisplayService.usedBank;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }
}
