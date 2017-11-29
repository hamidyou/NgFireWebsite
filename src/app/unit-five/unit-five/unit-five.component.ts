import {Component} from '@angular/core';

import {RootPositionTriadIdentificationQuizComponent} from '../root-position-triad-identification-quiz/root-position-triad-identification-quiz.component';

@Component({
  selector: 'app-unit-five',
  templateUrl: './unit-five.component.html',
  styleUrls: ['./unit-five.component.css']
})
export class UnitFiveComponent {

  constructor(private _rootPositionTriadIdentificationQuizComponent: RootPositionTriadIdentificationQuizComponent) {
  }

  startMajorMinorRootPositionTriadIdentificationQuiz(): void {
    this._rootPositionTriadIdentificationQuizComponent.startMajorMinorRootPositionTriadIdentificationQuiz()
  }

  startMajorAugmentedRootPositionTriadIdentificationQuiz(): void {
    this._rootPositionTriadIdentificationQuizComponent.startMajorAugmentedRootPositionTriadIdentificationQuiz()
  }

  startMinorDiminishedRootPositionTriadIdentificationQuiz(): void {
    this._rootPositionTriadIdentificationQuizComponent.startMinorDiminishedRootPositionTriadIdentificationQuiz()
  }

  startAllRootPositionTriadIdentificationQuiz(): void {
    this._rootPositionTriadIdentificationQuizComponent.startAllRootPositionTriadIdentificationQuiz()
  }

}
