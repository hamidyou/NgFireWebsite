import {Component, OnInit} from '@angular/core';
import {IntervalIdentificationQuizzesService} from '../interval-identification-quizzes.service';

@Component({
  selector: 'app-perfect-major-interval-identification-quiz',
  templateUrl: './perfect-major-interval-identification-quiz.component.html',
  styleUrls: ['./perfect-major-interval-identification-quiz.component.css']
})
export class PerfectMajorIntervalIdentificationQuizComponent implements OnInit {
  total: number = this._intervalIdentificationQuizzesService.total;
  public quizTitle: string;

  constructor(public _intervalIdentificationQuizzesService: IntervalIdentificationQuizzesService) {
  }

  startPerfectMajorIntervalIdentificationQuiz(): void {
    this.quizTitle = 'Perfect & Major';
    this._intervalIdentificationQuizzesService.perfectMajor = true;
    this._intervalIdentificationQuizzesService.getPerfectMajorIntervalIdentificaionQuizQuestion();
    this._intervalIdentificationQuizzesService.setInitialQuizVariables();
    this.total = 0;
  }

  reset(): void {
    this.startPerfectMajorIntervalIdentificationQuiz();
  }

  ngOnInit(): void {
    this.startPerfectMajorIntervalIdentificationQuiz();
  }
}
