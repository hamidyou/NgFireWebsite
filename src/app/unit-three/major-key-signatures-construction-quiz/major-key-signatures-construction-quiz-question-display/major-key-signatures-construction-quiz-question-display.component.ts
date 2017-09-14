import {Component, DoCheck, OnInit} from '@angular/core';

import {MajorKeySignaturesConstructionQuizService} from '../major-key-signatures-construction-quiz.service';
import {MajorKeySignaturesConstructionQuizQuestionDisplayService} from './major-key-signatures-construction-quiz-question-display.service';

@Component({
  selector: 'app-major-key-signatures-construction-quiz-question-display',
  templateUrl: './major-key-signatures-construction-quiz-question-display.component.html',
  styleUrls: ['./major-key-signatures-construction-quiz-question-display.component.css']
})
export class MajorKeySignaturesConstructionQuizQuestionDisplayComponent implements OnInit, DoCheck {
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

  constructor(private _majorKeySignaturesConstructionQuizService: MajorKeySignaturesConstructionQuizService, private _majorKeySignaturesConstructionQuizQuestionDisplayService: MajorKeySignaturesConstructionQuizQuestionDisplayService) {
  }

  checkVariables(): void {
    this.correct1 = this._majorKeySignaturesConstructionQuizService.correct1;
    this.correct2 = this._majorKeySignaturesConstructionQuizService.correct2;
    this.correct3 = this._majorKeySignaturesConstructionQuizService.correct3;
    this.correct4 = this._majorKeySignaturesConstructionQuizService.correct4;
    this.correct5 = this._majorKeySignaturesConstructionQuizService.correct5;
    this.correct6 = this._majorKeySignaturesConstructionQuizService.correct6;
    this.correct7 = this._majorKeySignaturesConstructionQuizService.correct7;
    this.correctAnswer = this._majorKeySignaturesConstructionQuizService.correctAnswer;
    this.accidentalsInAnswer = this._majorKeySignaturesConstructionQuizService.accidentalsInAnswer;
    this.wrongAnswer = this._majorKeySignaturesConstructionQuizService.wrongAnswer;
    this.checkMark = this._majorKeySignaturesConstructionQuizService.checkMark;
    this.hideAnswer = this._majorKeySignaturesConstructionQuizService.hideAnswer;
    this.current = this._majorKeySignaturesConstructionQuizService.current;
    this.bank = this._majorKeySignaturesConstructionQuizQuestionDisplayService.bank;
    this.usedBank = this._majorKeySignaturesConstructionQuizQuestionDisplayService.usedBank;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }
}
