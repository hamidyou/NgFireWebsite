import {Component, DoCheck, OnInit} from '@angular/core';

import {IntervalIdentificationQuizzesService} from '../interval-identification-quizzes.service';
import {IntervalIdentificationQuizzesQuestionDisplayService} from './interval-identification-quizzes-question-display.service';

@Component({
  selector: 'app-interval-identification-quizzes-question-display',
  templateUrl: './interval-identification-quizzes-question-display.component.html',
  styleUrls: ['./interval-identification-quizzes-question-display.component.css']
})
export class IntervalIdentificationQuizzesQuestionDisplayComponent implements OnInit, DoCheck {
  public current: any;
  public correctQuantity: boolean;
  public correctQuality: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public currentQuantity: string;
  public currentQuality: string;
  public perfectMajor: boolean;
  public perfectMajorMinor: boolean;
  public bank: any;
  public quantityBank: any;
  public usedBank: any;

  constructor(private _intervalIdentificationQuizzesService: IntervalIdentificationQuizzesService,
              private _intervalIdentificationQuizzesQuestionDisplayService: IntervalIdentificationQuizzesQuestionDisplayService) {
  }

  checkVariables(): void {
    this.current = this._intervalIdentificationQuizzesService.current;
    this.correctQuantity = this._intervalIdentificationQuizzesService.correctQuantity;
    this.correctQuality = this._intervalIdentificationQuizzesService.correctQuality;
    this.wrongAnswer = this._intervalIdentificationQuizzesService.wrongAnswer;
    this.checkMark = this._intervalIdentificationQuizzesService.checkMark;
    this.hideAnswer = this._intervalIdentificationQuizzesService.hideAnswer;
    this.currentQuantity = this._intervalIdentificationQuizzesService.currentQuantity;
    this.currentQuality = this._intervalIdentificationQuizzesService.currentQuality;
    this.perfectMajor = this._intervalIdentificationQuizzesService.perfectMajor;
    this.perfectMajorMinor = this._intervalIdentificationQuizzesService.perfectMajorMinor;
    this.bank = this._intervalIdentificationQuizzesQuestionDisplayService.bank;
    this.quantityBank = this._intervalIdentificationQuizzesQuestionDisplayService.quantityBank;
    this.usedBank = this._intervalIdentificationQuizzesQuestionDisplayService.usedBank;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }

}
