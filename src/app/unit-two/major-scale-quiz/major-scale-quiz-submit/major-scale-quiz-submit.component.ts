import { Component } from '@angular/core';

import {AuthenticationService} from '../../../authentication.service';
import {MajorScaleQuizSubmitService} from './major-scale-quiz-submit.service';

@Component({
  selector: 'app-major-scale-quiz-submit',
  templateUrl: './major-scale-quiz-submit.component.html',
  styleUrls: ['./major-scale-quiz-submit.component.css']
})
export class MajorScaleQuizSubmitComponent {

  constructor(public _authenticationService: AuthenticationService, public _majorScaleQuizSubmitService: MajorScaleQuizSubmitService) { }

  submitScore(): void {
    this._majorScaleQuizSubmitService.submitScore();
  }
}
