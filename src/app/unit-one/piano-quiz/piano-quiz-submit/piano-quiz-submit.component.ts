import {Component} from '@angular/core';

import {PianoQuizSubmitService} from './piano-quiz-submit.service';
import {AuthenticationService} from '../../../authentication.service';

@Component({
  selector: 'app-piano-quiz-submit',
  templateUrl: './piano-quiz-submit.component.html',
  styleUrls: ['./piano-quiz-submit.component.css']
})
export class PianoQuizSubmitComponent {

  constructor(public _pianoQuizSubmitService: PianoQuizSubmitService, public _authenticationService: AuthenticationService) {
  }

  submitScore(): void {
    this._pianoQuizSubmitService.submitScore();
  }
}
