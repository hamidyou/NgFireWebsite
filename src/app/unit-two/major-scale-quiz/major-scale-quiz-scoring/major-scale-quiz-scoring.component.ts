import {Component, DoCheck, OnInit} from '@angular/core';
import {MajorScaleQuizService} from '../major-scale-quiz.service';

@Component({
  selector: 'app-major-scale-quiz-scoring',
  templateUrl: './major-scale-quiz-scoring.component.html',
  styleUrls: ['./major-scale-quiz-scoring.component.css']
})
export class MajorScaleQuizScoringComponent implements OnInit, DoCheck {
  public notesAttempted: number;
  public notesCorrect: number;
  public notesIncorrect: number;
  public scalesAttempted: number;
  public total: number;

  constructor(private _majorScaleQuizService: MajorScaleQuizService) { }

  getMajorScaleQuizScore(): void {
    this.notesAttempted = this._majorScaleQuizService.notesAttempted;
    this.notesCorrect = this._majorScaleQuizService.notesCorrect;
    this.notesIncorrect = this._majorScaleQuizService.notesIncorrect;
    this.scalesAttempted = this._majorScaleQuizService.scalesAttempted;
    this.total = this._majorScaleQuizService.total;
  }

  ngOnInit(): void {
    this.getMajorScaleQuizScore();
  }

  ngDoCheck(): void {
    this.getMajorScaleQuizScore();
  }

}
