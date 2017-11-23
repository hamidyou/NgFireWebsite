import {Component, OnInit} from '@angular/core';
import {IntervalConstructionQuizService} from './interval-construction-quiz.service';
import {IntervalConstructionQuizQuestionDisplayService} from './interval-construction-quiz-question-display/interval-construction-quiz-question-display.service';

@Component({
  selector: 'app-interval-construction-quiz',
  templateUrl: './interval-construction-quiz.component.html',
  styleUrls: ['./interval-construction-quiz.component.css']
})
export class IntervalConstructionQuizComponent implements OnInit {
  public total: number = this._intervalConstructionQuizService.total;
  public pm;
  public pmm;
  public all;

  constructor(public _intervalConstructionQuizService: IntervalConstructionQuizService,
              public _intervalConstructionQuizQuestionDisplayService: IntervalConstructionQuizQuestionDisplayService) {
  }

  perfectMajor(): void {
    this.pm = true;
    this.pmm = false;
    this.all = false;
  }

  perfectMajorMinor(): void {
    this.pmm = true;
    this.pm = false;
    this.all = false;
  }

  allQuiz(): void {
    this.all = true;
    this.pm = false;
    this.pmm = false;
  }

  startIntervalConstructionQuiz(): void {
    if (this.pm) {
      this.startPerfectMajorIntervalConstructionQuiz();
    } else if (this.pmm) {
      this.startPerfectMajorMinorIntervalConstructionQuiz();
    } else if (this.all) {
      this.startAllIntervalConstructionQuiz();
    }
    this._intervalConstructionQuizService.setInitialQuizVariables();
    this._intervalConstructionQuizService.answerNotesAttempted = 0;
    this._intervalConstructionQuizService.answerNotesCorrect = 0;
    this._intervalConstructionQuizService.answerNotesIncorrect = 0;
    this._intervalConstructionQuizService.intervalsAttempted = 0;
    this.total = 0;
  }

  startPerfectMajorIntervalConstructionQuiz(): void {
    this._intervalConstructionQuizService.pmm = false;
    this._intervalConstructionQuizService.all = false;
    this._intervalConstructionQuizService.pm = true;
    this._intervalConstructionQuizService.getPerfectMajorIntervalConstructionQuizQuestion();
  }

  startPerfectMajorMinorIntervalConstructionQuiz(): void {
    this._intervalConstructionQuizService.pm = false;
    this._intervalConstructionQuizService.all = false;
    this._intervalConstructionQuizService.pmm = true;
    this._intervalConstructionQuizService.getPerfectMajorMinorIntervalConstructionQuizQuestion();
  }

  startAllIntervalConstructionQuiz(): void {
    this._intervalConstructionQuizService.pm = false;
    this._intervalConstructionQuizService.all = true;
    this._intervalConstructionQuizService.pmm = false;
    this._intervalConstructionQuizService.getAllIntervalConstructionQuizQuestion();
  }

  reset(): void {
    this._intervalConstructionQuizQuestionDisplayService.questionBank = [];
    this.pm = this._intervalConstructionQuizService.pm;
    this.pmm = this._intervalConstructionQuizService.pmm;
    this.all = this._intervalConstructionQuizService.all;
    this.startIntervalConstructionQuiz();
  }

  ngOnInit(): void {
    this.startIntervalConstructionQuiz();
  }
}
