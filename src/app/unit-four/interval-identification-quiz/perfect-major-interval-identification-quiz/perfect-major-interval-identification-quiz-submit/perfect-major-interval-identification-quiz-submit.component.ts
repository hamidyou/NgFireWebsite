import {Component} from '@angular/core';
import {PerfectMajorIntervalIdentificationQuizSubmitService} from './perfect-major-interval-identification-quiz-submit.service';
import {AuthenticationService} from '../../../../authentication.service';

@Component({
  selector: 'app-perfect-major-interval-identification-quiz-submit',
  templateUrl: './perfect-major-interval-identification-quiz-submit.component.html',
  styleUrls: ['./perfect-major-interval-identification-quiz-submit.component.css']
})
export class PerfectMajorIntervalIdentificationQuizSubmitComponent {

  constructor(public _perfectMajorIntervalIdentificationQuizSubmitService: PerfectMajorIntervalIdentificationQuizSubmitService, public _authenticationService: AuthenticationService) {
  }

  submitScore(): void {
    this._perfectMajorIntervalIdentificationQuizSubmitService.submitScore();
  }
}
