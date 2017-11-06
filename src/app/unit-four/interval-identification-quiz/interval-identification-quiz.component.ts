import {Component} from '@angular/core';
import {IntervalIdentificationQuizzesService} from './interval-identification-quizzes.service';

@Component({
  selector: 'app-interval-identification-quiz',
  templateUrl: './interval-identification-quiz.component.html',
  styleUrls: ['./interval-identification-quiz.component.css']
})
export class IntervalIdentificationQuizComponent {
  public total: number = this._intervalIdentificationQuizzesService.total;
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

  startPerfectMajorMinorIntervalIdentificationQuiz(): void {
    this.quizTitle = 'Perfect, Major, & minor';
    this._intervalIdentificationQuizzesService.perfectMajorMinor = true;
    this._intervalIdentificationQuizzesService.getPerfectMajorMinorIntervalIdentificaionQuizQuestion();
    this._intervalIdentificationQuizzesService.getQualityAnswerOptions();
    this._intervalIdentificationQuizzesService.getQuantityAnswerOptions();
    this._intervalIdentificationQuizzesService.setInitialQuizVariables();
    this.total = 0;
    console.log('quiz = ' + this.quizTitle);
  }

  startAllIntervalIdentificationQuiz(): void {
    this.quizTitle = 'All';
    this._intervalIdentificationQuizzesService.getAllIntervalIdentificationQuizQuestion();
    this._intervalIdentificationQuizzesService.getQualityAnswerOptions();
    this._intervalIdentificationQuizzesService.getQuantityAnswerOptions();
    this._intervalIdentificationQuizzesService.setInitialQuizVariables();
    this.total = 0;
    console.log('quiz = ' + this.quizTitle);
  }
}
