import {Component} from '@angular/core';
import {IntervalConstructionQuizService} from './interval-construction-quiz.service';

@Component({
  selector: 'app-interval-construction-quiz',
  templateUrl: './interval-construction-quiz.component.html',
  styleUrls: ['./interval-construction-quiz.component.css']
})
export class IntervalConstructionQuizComponent {
  public total: number = this._intervalConstructionQuizService.total;
  public quizTitle: string;

  constructor(public _intervalConstructionQuizService: IntervalConstructionQuizService,) {
  }

  startPerfectMajorIntervalConstructionQuiz(): void {
    this.quizTitle = 'Perfect & Major';
    console.log('we started here');
    this._intervalConstructionQuizService.pm = true;
    this._intervalConstructionQuizService.getPerfectMajorIntervalConstructionQuizQuestion();
    this._intervalConstructionQuizService.setInitialQuizVariables();
    this._intervalConstructionQuizService.answerNotesAttempted = 0;
    this._intervalConstructionQuizService.answerNotesCorrect = 0;
    this._intervalConstructionQuizService.answerNotesIncorrect = 0;
    this._intervalConstructionQuizService.intervalsAttempted = 0;
    this.total = 0;
    console.log(this._intervalConstructionQuizService.answerNotesCorrect);
    this.total = 0;
  }

  startPerfectMajorMinorIntervalConstructionQuiz(): void {
    this.quizTitle = 'Perfect, Major, & minor';
    this._intervalConstructionQuizService.pmm = true;
    this._intervalConstructionQuizService.getPerfectMajorMinorIntervalConstructionQuizQuestion();
//    this._intervalConstructionQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  startAllIntervalConstructionQuiz(): void {
    this.quizTitle = 'All';
    this._intervalConstructionQuizService.all = true;
    this._intervalConstructionQuizService.getAllIntervalConstructionQuizQuestion();
//    this._intervalConstructionQuizService.setInitialQuizVariables();
    this.total = 0;
  }

}
