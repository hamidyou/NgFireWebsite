import {Component, DoCheck, OnInit} from '@angular/core';
import {IntervalConstructionQuizService} from '../interval-construction-quiz.service';

@Component({
  selector: 'app-interval-construction-quiz-scoring',
  templateUrl: './interval-construction-quiz-scoring.component.html',
  styleUrls: ['./interval-construction-quiz-scoring.component.css']
})
export class IntervalConstructionQuizScoringComponent implements OnInit, DoCheck {
  public answerNotesAttempted: number;
  public answerNotesCorrect: number;
  public answerNotesIncorrect: number;
  public intervalsAttempted: number;
  public total: number;

  constructor(public _intervalConstructionQuizService: IntervalConstructionQuizService) {
  }

  getIntervalConstructionQuizScore(): void {
    this.answerNotesCorrect = this._intervalConstructionQuizService.answerNotesCorrect;
    this.answerNotesAttempted = this._intervalConstructionQuizService.answerNotesAttempted;
    this.answerNotesIncorrect = this._intervalConstructionQuizService.answerNotesIncorrect;
    this.intervalsAttempted = this._intervalConstructionQuizService.intervalsAttempted;
    this.total = this._intervalConstructionQuizService.total;
  }

  ngOnInit(): void {
    this.getIntervalConstructionQuizScore();
  }

  ngDoCheck(): void {
    this.getIntervalConstructionQuizScore();
  }

}
