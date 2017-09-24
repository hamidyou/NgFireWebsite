import {Component} from '@angular/core';

import {IntervalIdentificationQuizComponent} from '../interval-identification-quiz/interval-identification-quiz.component';

@Component({
  selector: 'app-unit-four',
  templateUrl: './unit-four.component.html',
  styleUrls: ['./unit-four.component.css'],
  providers: [IntervalIdentificationQuizComponent]
})
export class UnitFourComponent {
  constructor(public _intervalIdentificationQuizComponent: IntervalIdentificationQuizComponent) {
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
}
