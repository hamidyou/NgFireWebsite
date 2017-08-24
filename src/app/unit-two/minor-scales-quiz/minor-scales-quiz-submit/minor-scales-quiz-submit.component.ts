import { Component } from '@angular/core';

import {AuthenticationService} from '../../../authentication.service';
import {MinorScalesQuizSubmitService} from './minor-scales-quiz-submit.service';

@Component({
  selector: 'app-minor-scales-quiz-submit',
  templateUrl: './minor-scales-quiz-submit.component.html',
  styleUrls: ['./minor-scales-quiz-submit.component.css']
})
export class MinorScalesQuizSubmitComponent {

  constructor(public _authenticationService: AuthenticationService, public _minorScalesQuizSubmitService: MinorScalesQuizSubmitService) { }

  submitScore(): void {
    this._minorScalesQuizSubmitService.submitScore();
  }
}
