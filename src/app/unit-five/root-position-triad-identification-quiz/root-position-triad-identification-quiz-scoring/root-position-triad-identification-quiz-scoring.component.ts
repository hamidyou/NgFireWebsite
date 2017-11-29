import {Component, DoCheck, OnInit} from '@angular/core';

import {RootPositionTriadIdentificationQuizService} from '../root-position-triad-identification-quiz.service';

@Component({
  selector: 'app-root-position-triad-identification-quiz-scoring',
  templateUrl: './root-position-triad-identification-quiz-scoring.component.html',
  styleUrls: ['./root-position-triad-identification-quiz-scoring.component.css']
})
export class RootPositionTriadIdentificationQuizScoringComponent implements OnInit, DoCheck {
  public triadsCorrect: number;
  public triadsIncorrect: number;
  public triadsAttempted: number;
  public total: number;

  constructor(private _rootPositionTriadIdentificationQuizService: RootPositionTriadIdentificationQuizService) {
  }

  getRootPositionTriadIdentificationQuizScore(): void {
    this.triadsCorrect = this._rootPositionTriadIdentificationQuizService.triadsCorrect;
    this.triadsIncorrect = this._rootPositionTriadIdentificationQuizService.triadsIncorrect;
    this.triadsAttempted = this._rootPositionTriadIdentificationQuizService.triadsAttempted;
    this.total = this._rootPositionTriadIdentificationQuizService.total;
  }

  ngOnInit(): void {
    this.getRootPositionTriadIdentificationQuizScore();
  }

  ngDoCheck(): void {
    this.getRootPositionTriadIdentificationQuizScore();
  }
}
