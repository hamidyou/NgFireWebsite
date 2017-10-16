import {Component, OnInit} from '@angular/core';

import {IntervalIdentificationQuizzesService} from '../interval-identification-quizzes.service';

@Component({
  selector: 'app-perfect-major-minor-interval-identification-quiz',
  templateUrl: './perfect-major-minor-interval-identification-quiz.component.html',
  styleUrls: ['./perfect-major-minor-interval-identification-quiz.component.css']
})
export class PerfectMajorMinorIntervalIdentificationQuizComponent implements OnInit {
  total: number = this._intervalIdentificationQuizzesService.total;
  public quizTitle: string;

  constructor(public _intervalIdentificationQuizzesService: IntervalIdentificationQuizzesService) {
  }

  startPerfectMajorMinorIntervalIdentificationQuiz(): void {
    this.quizTitle = 'Perfect, Major, & minor';
    this._intervalIdentificationQuizzesService.perfectMajorMinor = true;
    this._intervalIdentificationQuizzesService.getPerfectMajorMinorIntervalIdentificaionQuizQuestion();
    this._intervalIdentificationQuizzesService.setInitialQuizVariables();
    this.total = 0;
  }

  ngOnInit(): void {
    this.startPerfectMajorMinorIntervalIdentificationQuiz();
  }
}
