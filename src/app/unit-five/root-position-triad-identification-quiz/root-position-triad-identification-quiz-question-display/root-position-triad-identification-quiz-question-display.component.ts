import {Component, DoCheck, OnInit} from '@angular/core';
import {RootPositionTriadIdentificationQuizQuestionDisplayService} from './root-position-triad-identification-quiz-question-display.service';
import {RootPositionTriadIdentificationQuizService} from '../root-position-triad-identification-quiz.service';

@Component({
  selector: 'app-root-position-triad-identification-quiz-question-display',
  templateUrl: './root-position-triad-identification-quiz-question-display.component.html',
  styleUrls: ['./root-position-triad-identification-quiz-question-display.component.css']
})
export class RootPositionTriadIdentificationQuizQuestionDisplayComponent implements OnInit, DoCheck {
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public quality: any;

  constructor(public _rootPositionTriadIdentificationQuizQuestionDisplayService: RootPositionTriadIdentificationQuizQuestionDisplayService,
              public _rootPositionTriadIdentificationQuizService: RootPositionTriadIdentificationQuizService) {
  }

  checkVariables(): void {
    this.quality = this._rootPositionTriadIdentificationQuizQuestionDisplayService.quality;
    this.checkMark = this._rootPositionTriadIdentificationQuizService.checkMark;
    this.wrongAnswer = this._rootPositionTriadIdentificationQuizService.wrongAnswer;
    this.hideAnswer = this._rootPositionTriadIdentificationQuizService.hideAnswer;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();

  }

}
