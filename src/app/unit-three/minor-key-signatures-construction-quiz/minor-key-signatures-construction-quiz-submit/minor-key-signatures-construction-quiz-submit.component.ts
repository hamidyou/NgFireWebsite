import { Component } from '@angular/core';

import {MinorKeySignaturesConstructionQuizSubmitService} from './minor-key-signatures-construction-quiz-submit.service';
import {AuthenticationService} from '../../../authentication.service';

@Component({
  selector: 'app-minor-key-signatures-construction-quiz-submit',
  templateUrl: './minor-key-signatures-construction-quiz-submit.component.html',
  styleUrls: ['./minor-key-signatures-construction-quiz-submit.component.css']
})

export class MinorKeySignaturesConstructionQuizSubmitComponent {

  constructor(public _minorKeySignaturesConstructionQuizSubmitService: MinorKeySignaturesConstructionQuizSubmitService, public _authenticationService: AuthenticationService) {}

  submitScore(): void {
    this._minorKeySignaturesConstructionQuizSubmitService.submitScore();
  }
}
