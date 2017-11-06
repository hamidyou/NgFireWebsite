import {Component} from '@angular/core';

import {IntervalIdentificationQuizComponent} from '../interval-identification-quiz/interval-identification-quiz.component';
import {IntervalConstructionQuizComponent} from '../interval-construction-quiz/interval-construction-quiz.component';

@Component({
  selector: 'app-unit-four',
  templateUrl: './unit-four.component.html',
  styleUrls: ['./unit-four.component.css'],
  providers: [IntervalIdentificationQuizComponent, IntervalConstructionQuizComponent]
})
export class UnitFourComponent {
  constructor(public _intervalIdentificationQuizComponent: IntervalIdentificationQuizComponent,
              public _intervalConstructionQuizComponent: IntervalConstructionQuizComponent) {
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
    this._intervalConstructionQuizComponent.startPerfectMajorIntervalConstructionQuiz();
  }
}
