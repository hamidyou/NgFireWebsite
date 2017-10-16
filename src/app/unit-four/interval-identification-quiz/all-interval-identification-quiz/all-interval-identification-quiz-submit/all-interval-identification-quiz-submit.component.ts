import {Component} from '@angular/core';
import {AuthenticationService} from '../../../../authentication.service';
import {AllIntervalIdentificationQuizSubmitService} from './all-interval-identification-quiz-submit.service';

@Component({
  selector: 'app-all-interval-identification-quiz-submit',
  templateUrl: './all-interval-identification-quiz-submit.component.html',
  styleUrls: ['./all-interval-identification-quiz-submit.component.css']
})
export class AllIntervalIdentificationQuizSubmitComponent {

  constructor(public _allIntervalIdentificationQuizSubmitService: AllIntervalIdentificationQuizSubmitService, public _authenticationService: AuthenticationService) {
  }

  submitScore(): void {
    this._allIntervalIdentificationQuizSubmitService.submitScore();
  }
}
