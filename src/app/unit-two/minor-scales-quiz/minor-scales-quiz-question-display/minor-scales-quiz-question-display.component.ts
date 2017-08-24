import {Component, DoCheck, OnInit} from '@angular/core';

import {MinorScalesQuizService} from '../minor-scales-quiz.service';
import {MinorScaleQuizQuestionDisplayService} from './minor-scale-quiz-question-display.service';

@Component({
  selector: 'app-minor-scales-quiz-question-display',
  templateUrl: './minor-scales-quiz-question-display.component.html',
  styleUrls: ['./minor-scales-quiz-question-display.component.css']
})
export class MinorScalesQuizQuestionDisplayComponent implements OnInit, DoCheck {
  public correct1: boolean;
  public correct2: boolean;
  public correct3: boolean;
  public correct4: boolean;
  public correct5: boolean;
  public correct6: boolean;
  public correct7: boolean;
  public correct8: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public current: any;
  public bank: any;
  public usedBank: any;

  constructor(private _minorScalesQuizService: MinorScalesQuizService, private _minorScalesQuizQuestionDisplayService: MinorScaleQuizQuestionDisplayService) { }

  checkVariables(): void {
    this.correct1 = this._minorScalesQuizService.correct1;
    this.correct2 = this._minorScalesQuizService.correct2;
    this.correct3 = this._minorScalesQuizService.correct3;
    this.correct4 = this._minorScalesQuizService.correct4;
    this.correct5 = this._minorScalesQuizService.correct5;
    this.correct6 = this._minorScalesQuizService.correct6;
    this.correct7 = this._minorScalesQuizService.correct7;
    this.correct8 = this._minorScalesQuizService.correct8;
    this.wrongAnswer = this._minorScalesQuizService.wrongAnswer;
    this.checkMark = this._minorScalesQuizService.checkMark;
    this.hideAnswer = this._minorScalesQuizService.hideAnswer;
    this.current = this._minorScalesQuizService.current;
    this.bank = this._minorScalesQuizQuestionDisplayService.bank;
    this.usedBank = this._minorScalesQuizQuestionDisplayService.usedBank;

  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }
}
