import {Component, DoCheck, OnInit} from '@angular/core';

import {MajorScaleQuizService} from '../major-scale-quiz.service';
import {MajorScaleQuizQuestionDisplayService} from './major-scale-quiz-question-display.service';

@Component({
  selector: 'app-major-scale-quiz-question-display',
  templateUrl: './major-scale-quiz-question-display.component.html',
  styleUrls: ['./major-scale-quiz-question-display.component.css']
})
export class MajorScaleQuizQuestionDisplayComponent implements OnInit, DoCheck {
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

  constructor(private _majorScaleQuizService: MajorScaleQuizService, private _majorScaleQuizQuestionDisplayService: MajorScaleQuizQuestionDisplayService) { }

  checkVariables(): void {
  this.correct1 = this._majorScaleQuizService.correct1;
  this.correct2 = this._majorScaleQuizService.correct2;
  this.correct3 = this._majorScaleQuizService.correct3;
  this.correct4 = this._majorScaleQuizService.correct4;
  this.correct5 = this._majorScaleQuizService.correct5;
  this.correct6 = this._majorScaleQuizService.correct6;
  this.correct7 = this._majorScaleQuizService.correct7;
  this.correct8 = this._majorScaleQuizService.correct8;
  this.wrongAnswer = this._majorScaleQuizService.wrongAnswer;
  this.checkMark = this._majorScaleQuizService.checkMark;
  this.hideAnswer = this._majorScaleQuizService.hideAnswer;
  this.current = this._majorScaleQuizService.current;
  this.bank = this._majorScaleQuizQuestionDisplayService.bank;
  this.usedBank = this._majorScaleQuizQuestionDisplayService.usedBank;

  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }

}
