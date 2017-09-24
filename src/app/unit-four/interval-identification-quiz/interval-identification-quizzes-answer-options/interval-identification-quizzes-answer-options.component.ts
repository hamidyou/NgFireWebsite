import {Component, DoCheck, OnInit} from '@angular/core';
import {IntervalIdentificationQuizzesService} from '../interval-identification-quizzes.service';

@Component({
  selector: 'app-interval-identification-quizzes-answer-options',
  templateUrl: './interval-identification-quizzes-answer-options.component.html',
  styleUrls: ['./interval-identification-quizzes-answer-options.component.css']
})
export class IntervalIdentificationQuizzesAnswerOptionsComponent implements OnInit, DoCheck {
  public current: any;
  public correctQuantity: boolean;
  public correctQuality: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public currentQuantity: string;
  public currentQuality: string;
  public intervalQualities: any = this._intervalIdentificationQuizzesService.intervalQualities;
  public intervalQuantities: any = this._intervalIdentificationQuizzesService.intervalQuantities;

  constructor(public _intervalIdentificationQuizzesService: IntervalIdentificationQuizzesService) {
  }

  checkQuality(event): void {
    this._intervalIdentificationQuizzesService.checkQuality(event);
  }

  checkQuantity(event): void {
    this._intervalIdentificationQuizzesService.checkQuantity(event);
  }

  getQuizAnswerOptionsVariables(): void {
    this.current = this._intervalIdentificationQuizzesService.current;
    this.correctQuantity = this._intervalIdentificationQuizzesService.correctQuantity;
    this.correctQuality = this._intervalIdentificationQuizzesService.correctQuality;
    this.wrongAnswer = this._intervalIdentificationQuizzesService.wrongAnswer;
    this.checkMark = this._intervalIdentificationQuizzesService.checkMark;
    this.hideAnswer = this._intervalIdentificationQuizzesService.hideAnswer;
    this.currentQuantity = this._intervalIdentificationQuizzesService.currentQuantity;
    this.currentQuality = this._intervalIdentificationQuizzesService.currentQuality;
    this.intervalQuantities = this._intervalIdentificationQuizzesService.intervalQuantities;
    this.intervalQualities = this._intervalIdentificationQuizzesService.intervalQualities;
  }

  ngOnInit(): void {
    this.getQuizAnswerOptionsVariables();
  }

  ngDoCheck(): void {
    this.getQuizAnswerOptionsVariables();
  }

}
