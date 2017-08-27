import { Component, OnInit } from '@angular/core';
import {ScaleIdentificationQuizService} from '../scale-identification-quiz.service';

@Component({
  selector: 'app-scale-identification-answer-options',
  templateUrl: './scale-identification-answer-options.component.html',
  styleUrls: ['./scale-identification-answer-options.component.css']
})
export class ScaleIdentificationAnswerOptionsComponent implements OnInit {
  public correctTonic: boolean;
  public correctScale: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public noteNames: any;
  public current: any;
  public scaleQualities: any;

  constructor(private _scaleIdentificationQuizService: ScaleIdentificationQuizService) { }

  checkTonic(event): void {
    this._scaleIdentificationQuizService.checkTonic(event);
  }

  checkScale(event): void {
    this._scaleIdentificationQuizService.checkScale(event);
  }

  getQuizAnswerOptionsVariables(): void {
    this.correctScale = this._scaleIdentificationQuizService.correctScale;
    this.correctTonic = this._scaleIdentificationQuizService.correctTonic;
    this.wrongAnswer = this._scaleIdentificationQuizService.wrongAnswer;
    this.checkMark = this._scaleIdentificationQuizService.checkMark;
    this.hideAnswer = this._scaleIdentificationQuizService.hideAnswer;
    this.noteNames = this._scaleIdentificationQuizService.noteNames;
    this.current = this._scaleIdentificationQuizService.current;
    this.scaleQualities = this._scaleIdentificationQuizService.scaleQualities;
  }

  ngOnInit(): void {
    this.getQuizAnswerOptionsVariables();
  }

}
