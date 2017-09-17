import {Component, DoCheck, OnInit} from '@angular/core';

import {MinorKeySignaturesConstructionQuizService} from '../minor-key-signatures-construction-quiz.service';

@Component({
  selector: 'app-minor-key-signatures-construction-quiz-scoring',
  templateUrl: './minor-key-signatures-construction-quiz-scoring.component.html',
  styleUrls: ['./minor-key-signatures-construction-quiz-scoring.component.css']
})
export class MinorKeySignaturesConstructionQuizScoringComponent implements OnInit, DoCheck {
  public accidentalsCorrect: number;
  public accidentalsIncorrect: number;
  public accidentalsAttempted: number;
  public keysCorrect: number;
  public keysIncorrect: number;
  public keysAttempted: number;
  public total: number;

  constructor(private _minorKeySignaturesConstructionQuizService: MinorKeySignaturesConstructionQuizService) { }

  getMinorKeySignaturesConstructionQuizScore(): void {
    this.keysCorrect = this._minorKeySignaturesConstructionQuizService.keysCorrect;
    this.keysIncorrect = this._minorKeySignaturesConstructionQuizService.keysIncorrect;
    this.keysAttempted = this._minorKeySignaturesConstructionQuizService.keysAttempted;
    this.accidentalsCorrect = this._minorKeySignaturesConstructionQuizService.accidentalsCorrect;
    this.accidentalsIncorrect = this._minorKeySignaturesConstructionQuizService.accidentalsIncorrect;
    this.accidentalsAttempted = this._minorKeySignaturesConstructionQuizService.accidentalsAttempted;
    this.total = this._minorKeySignaturesConstructionQuizService.total;
  }

  ngOnInit(): void {
    this.getMinorKeySignaturesConstructionQuizScore();
  }

  ngDoCheck(): void {
    this.getMinorKeySignaturesConstructionQuizScore();
  }

}
