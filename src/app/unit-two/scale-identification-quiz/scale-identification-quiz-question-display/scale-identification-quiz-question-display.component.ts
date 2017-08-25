import {Component, DoCheck, OnInit} from '@angular/core';
import {ScaleIdentificationQuizQuestionDisplayService} from './scale-identification-quiz-question-display.service';
import {ScaleIdentificationQuizService} from '../scale-identification-quiz.service';

@Component({
  selector: 'app-scale-identification-quiz-question-display',
  templateUrl: './scale-identification-quiz-question-display.component.html',
  styleUrls: ['./scale-identification-quiz-question-display.component.css']
})
export class ScaleIdentificationQuizQuestionDisplayComponent implements OnInit, DoCheck {
  public correctTonic: boolean;
  public correctScale: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public current: any;
  public bank: any;
  public usedBank: any;

  constructor(private _scaleIdentificationsQuizService: ScaleIdentificationQuizService, private _scaleIdentificationsQuizQuestionDisplayService: ScaleIdentificationQuizQuestionDisplayService) { }

  checkVariables(): void {
    this.correctTonic = this._scaleIdentificationsQuizService.correctTonic;
    this.correctScale = this._scaleIdentificationsQuizService.correctScale;
    this.wrongAnswer = this._scaleIdentificationsQuizService.wrongAnswer;
    this.checkMark = this._scaleIdentificationsQuizService.checkMark;
    this.hideAnswer = this._scaleIdentificationsQuizService.hideAnswer;
    this.current = this._scaleIdentificationsQuizService.current;
    this.bank = this._scaleIdentificationsQuizQuestionDisplayService.bank;
    this.usedBank = this._scaleIdentificationsQuizQuestionDisplayService.usedBank;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }

}
