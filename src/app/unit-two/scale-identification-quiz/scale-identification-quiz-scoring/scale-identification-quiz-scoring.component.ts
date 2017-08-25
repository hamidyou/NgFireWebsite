import {Component, DoCheck, OnInit} from '@angular/core';
import {ScaleIdentificationQuizService} from '../scale-identification-quiz.service';

@Component({
  selector: 'app-scale-identification-quiz-scoring',
  templateUrl: './scale-identification-quiz-scoring.component.html',
  styleUrls: ['./scale-identification-quiz-scoring.component.css']
})
export class ScaleIdentificationQuizScoringComponent implements OnInit, DoCheck {
  public tonicsAttempted: number;
  public tonicsCorrect: number;
  public tonicsIncorrect: number;
  public scalesAttempted: number;
  public scalesCorrect: number;
  public scalesIncorrect: number;
  public total: number;

  constructor(private _scaleIdentificationQuizService: ScaleIdentificationQuizService) { }

  getScaleIdentificationQuizScore(): void {
    this.tonicsAttempted = this._scaleIdentificationQuizService.tonicsAttempted;
    this.tonicsCorrect = this._scaleIdentificationQuizService.tonicsCorrect;
    this.tonicsIncorrect = this._scaleIdentificationQuizService.tonicsIncorrect;
    this.scalesAttempted = this._scaleIdentificationQuizService.scalesAttempted;
    this.scalesCorrect = this._scaleIdentificationQuizService.scalesCorrect;
    this.scalesIncorrect = this._scaleIdentificationQuizService.scalesIncorrect;
    this.total = this._scaleIdentificationQuizService.total;
  }

  ngOnInit(): void {
    this.getScaleIdentificationQuizScore();
  }

  ngDoCheck(): void {
    this.getScaleIdentificationQuizScore();
  }

}
