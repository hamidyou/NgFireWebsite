import {Component, DoCheck, OnInit} from '@angular/core';

import {MajorKeySignaturesConstructionQuizService} from '../major-key-signatures-construction-quiz.service';

@Component({
  selector: 'app-major-key-signatures-construction-quiz-scoring',
  templateUrl: './major-key-signatures-construction-quiz-scoring.component.html',
  styleUrls: ['./major-key-signatures-construction-quiz-scoring.component.css']
})
export class MajorKeySignaturesConstructionQuizScoringComponent implements OnInit, DoCheck {
  public accidentalsCorrect: number;
  public accidentalsIncorrect: number;
  public accidentalsAttempted: number;
  public keysCorrect: number;
  public keysIncorrect: number;
  public keysAttempted: number;
  public total: number;

  constructor(private _majorKeySignaturesConstructionQuizService: MajorKeySignaturesConstructionQuizService) { }

  getMajorKeySignaturesConstructionQuizScore(): void {
    this.keysCorrect = this._majorKeySignaturesConstructionQuizService.keysCorrect;
    this.keysIncorrect = this._majorKeySignaturesConstructionQuizService.keysIncorrect;
    this.keysAttempted = this._majorKeySignaturesConstructionQuizService.keysAttempted;
    this.accidentalsCorrect = this._majorKeySignaturesConstructionQuizService.accidentalsCorrect;
    this.accidentalsIncorrect = this._majorKeySignaturesConstructionQuizService.accidentalsIncorrect;
    this.accidentalsAttempted = this._majorKeySignaturesConstructionQuizService.accidentalsAttempted;
    this.total = this._majorKeySignaturesConstructionQuizService.total;
  }

  ngOnInit(): void {
    this.getMajorKeySignaturesConstructionQuizScore();
  }

  ngDoCheck(): void {
    this.getMajorKeySignaturesConstructionQuizScore();
  }

}
