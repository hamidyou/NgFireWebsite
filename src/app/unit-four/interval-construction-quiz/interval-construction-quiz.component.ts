import {Component, OnDestroy} from '@angular/core';
import {IntervalConstructionQuizService} from './interval-construction-quiz.service';

@Component({
  selector: 'app-interval-construction-quiz',
  templateUrl: './interval-construction-quiz.component.html',
  styleUrls: ['./interval-construction-quiz.component.css']
})
export class IntervalConstructionQuizComponent implements OnDestroy {
  public total: number = this._intervalConstructionQuizService.total;
  public quizTitle: string;
  public pm;
  public pmm;
  public all;

  constructor(public _intervalConstructionQuizService: IntervalConstructionQuizService,) {
  }

  startPerfectMajorIntervalConstructionQuiz(): void {
    this.quizTitle = 'Perfect & Major';
    this.pm = true;
    this._intervalConstructionQuizService.pmm = false;
    this._intervalConstructionQuizService.all = false;
    this._intervalConstructionQuizService.pm = this.pm;
    this._intervalConstructionQuizService.getPerfectMajorIntervalConstructionQuizQuestion();
    this._intervalConstructionQuizService.setInitialQuizVariables();
    this._intervalConstructionQuizService.answerNotesAttempted = 0;
    this._intervalConstructionQuizService.answerNotesCorrect = 0;
    this._intervalConstructionQuizService.answerNotesIncorrect = 0;
    this._intervalConstructionQuizService.intervalsAttempted = 0;
    this.total = 0;
    console.log('pm = ' + this.pm);
    console.log('icqs-pm = ' + this._intervalConstructionQuizService.pm);

  }

  startPerfectMajorMinorIntervalConstructionQuiz(): void {
    this.quizTitle = 'Perfect, Major, & minor';
    this.pmm = true;
    this._intervalConstructionQuizService.pm = false;
    this._intervalConstructionQuizService.all = false;
    this._intervalConstructionQuizService.pmm = this.pmm;
    this._intervalConstructionQuizService.getPerfectMajorMinorIntervalConstructionQuizQuestion();
    this._intervalConstructionQuizService.setInitialQuizVariables();
    this._intervalConstructionQuizService.answerNotesAttempted = 0;
    this._intervalConstructionQuizService.answerNotesCorrect = 0;
    this._intervalConstructionQuizService.answerNotesIncorrect = 0;
    this._intervalConstructionQuizService.intervalsAttempted = 0;
    this.total = 0;
  }

  startAllIntervalConstructionQuiz(): void {
    this.quizTitle = 'All';
    this.all = true;
    this._intervalConstructionQuizService.all = this.all;
    this._intervalConstructionQuizService.getAllIntervalConstructionQuizQuestion();
    this._intervalConstructionQuizService.setInitialQuizVariables();
    this._intervalConstructionQuizService.answerNotesAttempted = 0;
    this._intervalConstructionQuizService.answerNotesCorrect = 0;
    this._intervalConstructionQuizService.answerNotesIncorrect = 0;
    this._intervalConstructionQuizService.intervalsAttempted = 0;
    this.total = 0;
  }

  ngOnDestroy(): void {
    this.pm = false;
    this.pmm = false;
    this.all = false;
  }
}
