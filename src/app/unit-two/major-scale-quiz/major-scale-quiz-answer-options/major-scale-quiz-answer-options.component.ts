import { Component, OnInit } from '@angular/core';
import {MajorScaleQuizCheckAnswersService} from '../major-scale-quiz-check-answers.service';
import {MajorScaleQuizService} from '../major-scale-quiz.service';

@Component({
  selector: 'app-major-scale-quiz-answer-options',
  templateUrl: './major-scale-quiz-answer-options.component.html',
  styleUrls: ['./major-scale-quiz-answer-options.component.css']
})
export class MajorScaleQuizAnswerOptionsComponent implements OnInit {
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

  constructor(public _majorScaleQuizService: MajorScaleQuizService) { }

  check1(event): void {
    this._majorScaleQuizService.check1(event);
  }

  check2(event): void {
    this._majorScaleQuizService.check2(event);
  }

  check3(event): void {
    this._majorScaleQuizService.check3(event);
  }

  check4(event): void {
    this._majorScaleQuizService.check4(event);
  }

  check5(event): void {
    this._majorScaleQuizService.check5(event);
  }

  check6(event): void {
    this._majorScaleQuizService.check6(event);
  }

  check7(event): void {
    this._majorScaleQuizService.check7(event);
  }

  check8(event): void {
    this._majorScaleQuizService.check8(event);
  }

  getQuizAnswerOptionsVariables(): void {
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
    this.noteNames = this._majorScaleQuizService.noteNames;
    this.current = this._majorScaleQuizService.current;
  }

  ngOnInit() {
    this.getQuizAnswerOptionsVariables();
  }

}
