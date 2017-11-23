import {Component} from '@angular/core';
import {AuthenticationService} from '../../../authentication.service';
import {AllIntervalConstructionQuizSubmitService} from './all-interval-construction-quiz-submit.service';

@Component({
  selector: 'app-all-interval-construction-quiz-submit',
  templateUrl: './all-interval-construction-quiz-submit.component.html',
  styleUrls: ['./all-interval-construction-quiz-submit.component.css']
})
export class AllIntervalConstructionQuizSubmitComponent {

  constructor(public _allIntervalConstructionQuizSubmitService: AllIntervalConstructionQuizSubmitService,
              public _authenticationService: AuthenticationService) {
  }

  submitScore(): void {
    this._allIntervalConstructionQuizSubmitService.submitScore();
  }

}
