import { Component } from '@angular/core';

import {NoteQuizSubmitService} from './note-quiz-submit.service';
import {AuthenticationService} from '../../../authentication.service';

@Component({
  selector: 'app-note-quiz-submit',
  templateUrl: './note-quiz-submit.component.html',
  styleUrls: ['./note-quiz-submit.component.css']
})
export class NoteQuizSubmitComponent {

  constructor(public _noteQuizSubmitService: NoteQuizSubmitService, public _authenticationService: AuthenticationService) { }

  submitScore(): void {
    this._noteQuizSubmitService.submitScore();
  }
}
