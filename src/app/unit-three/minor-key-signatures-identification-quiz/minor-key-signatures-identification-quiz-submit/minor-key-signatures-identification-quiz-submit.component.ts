import { Component } from '@angular/core';
import {MinorKeySignaturesIdentificationQuizSubmitService} from './minor-key-signatures-identification-quiz-submit.service';
import {AuthenticationService} from '../../../authentication.service';

@Component({
  selector: 'app-minor-key-signatures-identification-quiz-submit',
  templateUrl: './minor-key-signatures-identification-quiz-submit.component.html',
  styleUrls: ['./minor-key-signatures-identification-quiz-submit.component.css']
})

export class MinorKeySignaturesIdentificationQuizSubmitComponent {

  constructor(public _minorKeySignaturesIdentificationQuizSubmitService: MinorKeySignaturesIdentificationQuizSubmitService, public _authenticationService: AuthenticationService) {}

  submitScore(): void {
    this._minorKeySignaturesIdentificationQuizSubmitService.submitScore();
  }
}
