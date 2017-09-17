import { Component } from '@angular/core';

import {MajorKeySignaturesConstructionQuizSubmitService} from './major-key-signatures-construction-quiz-submit.service';
import {AuthenticationService} from '../../../authentication.service';

@Component({
  selector: 'app-major-key-signatures-construction-quiz-submit',
  templateUrl: './major-key-signatures-construction-quiz-submit.component.html',
  styleUrls: ['./major-key-signatures-construction-quiz-submit.component.css']
})

export class MajorKeySignaturesConstructionQuizSubmitComponent {

  constructor(public _majorKeySignaturesConstructionQuizSubmitService: MajorKeySignaturesConstructionQuizSubmitService, public _authenticationService: AuthenticationService) {}

  submitScore(): void {
    this._majorKeySignaturesConstructionQuizSubmitService.submitScore();
  }
}
