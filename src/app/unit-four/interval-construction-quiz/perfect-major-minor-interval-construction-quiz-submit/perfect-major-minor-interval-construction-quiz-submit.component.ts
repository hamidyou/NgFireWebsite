import {Component} from '@angular/core';
import {PerfectMajorMinorIntervalConstructionQuizSubmitService} from './perfect-major-minor-interval-construction-quiz-submit.service';
import {AuthenticationService} from '../../../authentication.service';

@Component({
  selector: 'app-perfect-major-minor-interval-construction-quiz-submit',
  templateUrl: './perfect-major-minor-interval-construction-quiz-submit.component.html',
  styleUrls: ['./perfect-major-minor-interval-construction-quiz-submit.component.css']
})
export class PerfectMajorMinorIntervalConstructionQuizSubmitComponent {

  constructor(public _perfectMajorMinorIntervalConstructionQuizSubmitService: PerfectMajorMinorIntervalConstructionQuizSubmitService,
              public _authenticationService: AuthenticationService) {
  }

  submitScore(): void {
    this._perfectMajorMinorIntervalConstructionQuizSubmitService.submitScore();
  }
}
