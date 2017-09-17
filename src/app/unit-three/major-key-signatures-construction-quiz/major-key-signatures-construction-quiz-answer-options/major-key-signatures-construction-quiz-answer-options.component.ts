import { Component, OnInit } from '@angular/core';
import {MajorKeySignaturesConstructionQuizService} from '../major-key-signatures-construction-quiz.service';

@Component({
  selector: 'app-major-key-signatures-construction-quiz-answer-options',
  templateUrl: './major-key-signatures-construction-quiz-answer-options.component.html',
  styleUrls: ['./major-key-signatures-construction-quiz-answer-options.component.css']
})
export class MajorKeySignaturesConstructionQuizAnswerOptionsComponent implements OnInit {
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
  public noteNames: any;

  constructor(public _majorKeySignaturesConstructionQuizService: MajorKeySignaturesConstructionQuizService) { }

  checkAnswer1(event): void {
    this._majorKeySignaturesConstructionQuizService.checkAnswer1(event);
  }

  checkAnswer2(event): void {
    this._majorKeySignaturesConstructionQuizService.checkAnswer2(event);
  }

  checkAnswer3(event): void {
    this._majorKeySignaturesConstructionQuizService.checkAnswer3(event);
  }

  checkAnswer4(event): void {
    this._majorKeySignaturesConstructionQuizService.checkAnswer4(event);
  }

  checkAnswer5(event): void {
    this._majorKeySignaturesConstructionQuizService.checkAnswer5(event);
  }

  checkAnswer6(event): void {
    this._majorKeySignaturesConstructionQuizService.checkAnswer6(event);
  }

  checkAnswer7(event): void {
    this._majorKeySignaturesConstructionQuizService.checkAnswer7(event);
  }

  getQuizAnswerOptionsVariables(): void {
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
    this.noteNames = this._majorKeySignaturesConstructionQuizService.noteNames;
    this.current = this._majorKeySignaturesConstructionQuizService.current;
  }

  ngOnInit() {
    this.getQuizAnswerOptionsVariables();
  }

  submit(): void {
    this._majorKeySignaturesConstructionQuizService.submit();
    this.getQuizAnswerOptionsVariables();
  }

}
