import {Component, DoCheck, OnInit} from '@angular/core';
import {IntervalConstructionQuizQuestionDisplayService} from './interval-construction-quiz-question-display.service';
import {IntervalConstructionQuizService} from '../interval-construction-quiz.service';


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

  constructor(private _intervalConstructionQuizQuestionDisplayService: IntervalConstructionQuizQuestionDisplayService,
              public _intervalConstructionQuizService: IntervalConstructionQuizService) {
  }

  checkVariables(): void {
    this.current = this._intervalConstructionQuizQuestionDisplayService.current;
    this.hideAnswer = this._intervalConstructionQuizService.hideAnswer;
    this.wrongAnswer = this._intervalConstructionQuizService.wrongAnswer;
    this.correctAnswerNote = this._intervalConstructionQuizService.correctAnswerNote;
    this.checkMark = this._intervalConstructionQuizService.checkMark;
    this.currentAnswerNote = this._intervalConstructionQuizService.currentAnswerNote;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }
}
