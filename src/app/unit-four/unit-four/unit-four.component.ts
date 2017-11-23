import {Component} from '@angular/core';

import {IntervalIdentificationQuizComponent} from '../interval-identification-quiz/interval-identification-quiz.component';
import {IntervalConstructionQuizComponent} from '../interval-construction-quiz/interval-construction-quiz.component';
import {IntervalConstructionQuizQuestionDisplayService} from '../interval-construction-quiz/interval-construction-quiz-question-display/interval-construction-quiz-question-display.service';

@Component({
  selector: 'app-unit-four',
  templateUrl: './unit-four.component.html',
  styleUrls: ['./unit-four.component.css'],
  providers: [IntervalIdentificationQuizComponent, IntervalConstructionQuizComponent]
})
export class UnitFourComponent {
  constructor(public _intervalIdentificationQuizComponent: IntervalIdentificationQuizComponent,
              public _intervalConstructionQuizComponent: IntervalConstructionQuizComponent,
              public _intervalConstructionQuizQuestionDisplayService: IntervalConstructionQuizQuestionDisplayService) {
  }

  startPerfectMajorIntervalIdentificationQuiz(): void {
    this._intervalIdentificationQuizComponent.startPerfectMajorIntervalIdentificationQuiz();
  }

  startPerfectMajorMinorIntervalIdentificationQuiz(): void {
    this._intervalIdentificationQuizComponent.startPerfectMajorMinorIntervalIdentificationQuiz();
  }

  startAllIntervalIdentificationQuiz(): void {
    this._intervalIdentificationQuizComponent.startAllIntervalIdentificationQuiz();
  }

  startPerfectMajorIntervalConstructionQuiz(): void {
    this._intervalConstructionQuizQuestionDisplayService.questionBank = [];
    this._intervalConstructionQuizComponent.pm = true;
    this._intervalConstructionQuizComponent.perfectMajor();
    this._intervalConstructionQuizComponent.startIntervalConstructionQuiz();
  }

  startPerfectMajorMinorIntervalConstructionQuiz(): void {
    this._intervalConstructionQuizQuestionDisplayService.questionBank = [];
    this._intervalConstructionQuizComponent.pmm = true;
    this._intervalConstructionQuizComponent.perfectMajorMinor();
    this._intervalConstructionQuizComponent.startIntervalConstructionQuiz();
  }

  startAllIntervalConstructionQuiz(): void {
    this._intervalConstructionQuizQuestionDisplayService.questionBank = [];
    this._intervalConstructionQuizComponent.all = true;
    this._intervalConstructionQuizComponent.allQuiz();
    this._intervalConstructionQuizComponent.startIntervalConstructionQuiz();
  }
}
