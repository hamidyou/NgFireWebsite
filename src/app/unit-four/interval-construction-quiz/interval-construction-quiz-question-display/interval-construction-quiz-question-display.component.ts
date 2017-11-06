import {Component, DoCheck, OnInit} from '@angular/core';
import {IntervalConstructionQuizQuestionDisplayService} from './interval-construction-quiz-question-display.service';


@Component({
  selector: 'app-interval-construction-quiz-question-display',
  templateUrl: './interval-construction-quiz-question-display.component.html',
  styleUrls: ['./interval-construction-quiz-question-display.component.css']
})

export class IntervalConstructionQuizQuestionDisplayComponent implements OnInit, DoCheck {
  public currentAnswerNote: string;
  public current: any;
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public correctAnswerNote: boolean;
  public checkMark: boolean;

  constructor(private _intervalConstructionQuizQuestionDisplayService: IntervalConstructionQuizQuestionDisplayService) {
  }

  checkVariables(): void {
    this.current = this._intervalConstructionQuizQuestionDisplayService.current;
    this.hideAnswer = this._intervalConstructionQuizQuestionDisplayService.hideAnswer;
    this.wrongAnswer = this._intervalConstructionQuizQuestionDisplayService.wrongAnswer;
    this.correctAnswerNote = this._intervalConstructionQuizQuestionDisplayService.correctAnswerNote;
    this.checkMark = this._intervalConstructionQuizQuestionDisplayService.checkMark;
    this.currentAnswerNote = this._intervalConstructionQuizQuestionDisplayService.currentAnswerNote;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }
}
