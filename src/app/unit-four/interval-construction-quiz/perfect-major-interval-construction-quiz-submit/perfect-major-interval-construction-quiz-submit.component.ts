import {Component} from '@angular/core';
import {PerfectMajorIntervalConstructionQuizSubmitService} from './perfect-major-interval-construction-quiz-submit.service';
import {AuthenticationService} from '../../../authentication.service';

@Component({
  selector: 'app-perfect-major-interval-construction-quiz-submit',
  templateUrl: './perfect-major-interval-construction-quiz-submit.component.html',
  styleUrls: ['./perfect-major-interval-construction-quiz-submit.component.css']
})
export class PerfectMajorIntervalConstructionQuizSubmitComponent {

  constructor(public _perfectMajorIntervalConstructionQuizSubmitService: PerfectMajorIntervalConstructionQuizSubmitService,
              public _authenticationService: AuthenticationService) {
  }

  submitScore(): void {
    this._perfectMajorIntervalConstructionQuizSubmitService.submitScore();
  }
}
