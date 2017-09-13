import { Component } from '@angular/core';
import {MajorKeySignaturesIdentificationQuizSubmitService} from './major-key-signatures-identification-quiz-submit.service';
import {AuthenticationService} from '../../../authentication.service';

@Component({
  selector: 'app-major-key-signatures-identification-quiz-submit',
  templateUrl: './major-key-signatures-identification-quiz-submit.component.html',
  styleUrls: ['./major-key-signatures-identification-quiz-submit.component.css']
})

export class MajorKeySignaturesIdentificationQuizSubmitComponent {

  constructor(public _majorKeySignaturesIdentificationQuizSubmitService: MajorKeySignaturesIdentificationQuizSubmitService, public _authenticationService: AuthenticationService) {}

  submitScore(): void {
    this._majorKeySignaturesIdentificationQuizSubmitService.submitScore();
  }
}
