import { Component, OnInit } from '@angular/core';
import {MinorScalesQuizService} from '../minor-scales-quiz.service';

@Component({
  selector: 'app-minor-scales-quiz-answer-options',
  templateUrl: './minor-scales-quiz-answer-options.component.html',
  styleUrls: ['./minor-scales-quiz-answer-options.component.css']
})
export class MinorScalesQuizAnswerOptionsComponent implements OnInit {
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
  public noteNames: any;
  public current: any;

  constructor(public _minorScalesQuizService: MinorScalesQuizService) { }

  check1(event): void {
    this._minorScalesQuizService.check1(event);
  }

  check2(event): void {
    this._minorScalesQuizService.check2(event);
  }

  check3(event): void {
    this._minorScalesQuizService.check3(event);
  }

  check4(event): void {
    this._minorScalesQuizService.check4(event);
  }

  check5(event): void {
    this._minorScalesQuizService.check5(event);
  }

  check6(event): void {
    this._minorScalesQuizService.check6(event);
  }

  check7(event): void {
    this._minorScalesQuizService.check7(event);
  }

  check8(event): void {
    this._minorScalesQuizService.check8(event);
  }

  getQuizAnswerOptionsVariables(): void {
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
    this.noteNames = this._minorScalesQuizService.noteNames;
    this.current = this._minorScalesQuizService.current;
  }

  ngOnInit() {
    this.getQuizAnswerOptionsVariables();
  }
}
