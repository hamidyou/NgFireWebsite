import {Component} from '@angular/core';
import {PerfectMajorMinorIntervalIdentificationQuizSubmitService} from './perfect-major-minor-interval-identification-quiz-submit.service';
import {AuthenticationService} from '../../../../authentication.service';

@Component({
  selector: 'app-perfect-major-minor-interval-identification-quiz-submit',
  templateUrl: './perfect-major-minor-interval-identification-quiz-submit.component.html',
  styleUrls: ['./perfect-major-minor-interval-identification-quiz-submit.component.css']
})
export class PerfectMajorMinorIntervalIdentificationQuizSubmitComponent {

  constructor(public _perfectMajorMinorIntervalIdentificationQuizSubmitService: PerfectMajorMinorIntervalIdentificationQuizSubmitService, public _authenticationService: AuthenticationService) {
  }

  submitScore(): void {
    this._perfectMajorMinorIntervalIdentificationQuizSubmitService.submitScore();
  }
}
