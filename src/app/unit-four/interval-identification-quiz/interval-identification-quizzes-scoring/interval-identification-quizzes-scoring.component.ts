import {Component, DoCheck, OnInit} from '@angular/core';
import {IntervalIdentificationQuizzesService} from '../interval-identification-quizzes.service';

@Component({
  selector: 'app-interval-identification-quizzes-scoring',
  templateUrl: './interval-identification-quizzes-scoring.component.html',
  styleUrls: ['./interval-identification-quizzes-scoring.component.css']
})
export class IntervalIdentificationQuizzesScoringComponent implements OnInit, DoCheck {
  public quantitiesAttempted: number;
  public quantitiesCorrect: number;
  public quantitiesIncorrect: number;
  public qualitiesAttempted: number;
  public qualitiesCorrect: number;
  public qualitiesIncorrect: number;
  public intervalsAttempted: number;
  public total: number;

  constructor(private _intervalIdentificationQuizzesService: IntervalIdentificationQuizzesService) {
  }

  getIntervalIdentificationQuizeScore(): void {
    this.quantitiesAttempted = this._intervalIdentificationQuizzesService.quantitiesAttempted;
    this.quantitiesCorrect = this._intervalIdentificationQuizzesService.quantitiesCorrect;
    this.quantitiesIncorrect = this._intervalIdentificationQuizzesService.quantitiesIncorrect;
    this.qualitiesAttempted = this._intervalIdentificationQuizzesService.qualitiesAttempted;
    this.qualitiesCorrect = this._intervalIdentificationQuizzesService.qualitiesCorrect;
    this.qualitiesIncorrect = this._intervalIdentificationQuizzesService.qualitiesIncorrect;
    this.intervalsAttempted = this._intervalIdentificationQuizzesService.intervalsAttempted;
    this.total = this._intervalIdentificationQuizzesService.total;
  }

  ngOnInit(): void {
    this.getIntervalIdentificationQuizeScore();
  }

  ngDoCheck(): void {
    this.getIntervalIdentificationQuizeScore();
  }

}
