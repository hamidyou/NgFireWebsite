import {Component, DoCheck, OnInit} from '@angular/core';

import {RootPositionTriadIdentificationQuizService} from '../root-position-triad-identification-quiz.service';

@Component({
  selector: 'app-root-position-triad-identification-quiz-answer-options',
  templateUrl: './root-position-triad-identification-quiz-answer-options.component.html',
  styleUrls: ['./root-position-triad-identification-quiz-answer-options.component.css']
})
export class RootPositionTriadIdentificationQuizAnswerOptionsComponent implements OnInit, DoCheck {
  public qualities: any;
  public correctTriad: boolean;
  public octave: any;

  constructor(public _rootPositionTriadIdentificationQuizService: RootPositionTriadIdentificationQuizService,) {
  }

  checkTriad(event): void {
    this._rootPositionTriadIdentificationQuizService.checkTriad(event);
  }

  getAnswerOptionVariables(): void {
    this.qualities = this._rootPositionTriadIdentificationQuizService.qualities;
    this.correctTriad = this._rootPositionTriadIdentificationQuizService.correctTriad;
    this.octave = this._rootPositionTriadIdentificationQuizService.octave;
  }

  ngOnInit(): void {
    this.getAnswerOptionVariables();
  }

  ngDoCheck(): void {
    this.getAnswerOptionVariables();
  }

}
