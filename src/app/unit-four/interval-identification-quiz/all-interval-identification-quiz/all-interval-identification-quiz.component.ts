import {Component, OnInit} from '@angular/core';
import {IntervalIdentificationQuizzesService} from '../interval-identification-quizzes.service';

@Component({
  selector: 'app-all-interval-identification-quiz',
  templateUrl: './all-interval-identification-quiz.component.html',
  styleUrls: ['./all-interval-identification-quiz.component.css']
})
export class AllIntervalIdentificationQuizComponent implements OnInit {
  total: number = this._intervalIdentificationQuizzesService.total;
  public quizTitle: string;

  constructor(public _intervalIdentificationQuizzesService: IntervalIdentificationQuizzesService) {
  }

  startAllIntervalIdentificationQuiz(): void {
    this.quizTitle = 'ALL';
    this._intervalIdentificationQuizzesService.all = true;
    this._intervalIdentificationQuizzesService.getAllIntervalIdentificationQuizQuestion();
    this._intervalIdentificationQuizzesService.setInitialQuizVariables();
    this.total = 0;
  }

  reset(): void {
    this.startAllIntervalIdentificationQuiz();
  }


  ngOnInit(): void {
    this.startAllIntervalIdentificationQuiz();
  }
}
