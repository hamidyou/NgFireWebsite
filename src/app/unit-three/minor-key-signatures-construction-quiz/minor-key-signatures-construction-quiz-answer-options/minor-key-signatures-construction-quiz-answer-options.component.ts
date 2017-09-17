import { Component, OnInit } from '@angular/core';
import {MinorKeySignaturesConstructionQuizService} from '../minor-key-signatures-construction-quiz.service';

@Component({
  selector: 'app-minor-key-signatures-construction-quiz-answer-options',
  templateUrl: './minor-key-signatures-construction-quiz-answer-options.component.html',
  styleUrls: ['./minor-key-signatures-construction-quiz-answer-options.component.css']
})
export class MinorKeySignaturesConstructionQuizAnswerOptionsComponent implements OnInit {
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

  constructor(public _minorKeySignaturesConstructionQuizService: MinorKeySignaturesConstructionQuizService) { }

  checkAnswer1(event): void {
    this._minorKeySignaturesConstructionQuizService.checkAnswer1(event);
  }

  checkAnswer2(event): void {
    this._minorKeySignaturesConstructionQuizService.checkAnswer2(event);
  }

  checkAnswer3(event): void {
    this._minorKeySignaturesConstructionQuizService.checkAnswer3(event);
  }

  checkAnswer4(event): void {
    this._minorKeySignaturesConstructionQuizService.checkAnswer4(event);
  }

  checkAnswer5(event): void {
    this._minorKeySignaturesConstructionQuizService.checkAnswer5(event);
  }

  checkAnswer6(event): void {
    this._minorKeySignaturesConstructionQuizService.checkAnswer6(event);
  }

  checkAnswer7(event): void {
    this._minorKeySignaturesConstructionQuizService.checkAnswer7(event);
  }

  getQuizAnswerOptionsVariables(): void {
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
    this.noteNames = this._minorKeySignaturesConstructionQuizService.noteNames;
    this.current = this._minorKeySignaturesConstructionQuizService.current;
  }

  ngOnInit() {
    this.getQuizAnswerOptionsVariables();
  }

  submit(): void {
    this._minorKeySignaturesConstructionQuizService.submit();
    this.getQuizAnswerOptionsVariables();
  }

}
