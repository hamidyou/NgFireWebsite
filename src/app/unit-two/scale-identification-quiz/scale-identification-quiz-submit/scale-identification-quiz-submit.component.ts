import { Component } from '@angular/core';

import {AuthenticationService} from '../../../authentication.service';
import {ScaleIdentificationQuizSubmitService} from './scale-identification-quiz-submit.service';

@Component({
  selector: 'app-scale-identification-quiz-submit',
  templateUrl: './scale-identification-quiz-submit.component.html',
  styleUrls: ['./scale-identification-quiz-submit.component.css']
})
export class ScaleIdentificationQuizSubmitComponent {

  constructor(public _authenticationService: AuthenticationService, public _scaleIdentificationQuizSubmitService: ScaleIdentificationQuizSubmitService) { }

  submitScore(): void {
    this._scaleIdentificationQuizSubmitService.submitScore();
  }

}
