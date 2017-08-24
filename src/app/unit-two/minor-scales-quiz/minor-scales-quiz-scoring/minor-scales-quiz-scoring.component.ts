import {Component, DoCheck, OnInit} from '@angular/core';
import {MinorScalesQuizService} from '../minor-scales-quiz.service';

@Component({
  selector: 'app-minor-scales-quiz-scoring',
  templateUrl: './minor-scales-quiz-scoring.component.html',
  styleUrls: ['./minor-scales-quiz-scoring.component.css']
})
export class MinorScalesQuizScoringComponent implements OnInit, DoCheck {
  public notesAttempted: number;
  public notesCorrect: number;
  public notesIncorrect: number;
  public scalesAttempted: number;
  public total: number;

  constructor(private _minorScalesQuizService: MinorScalesQuizService) { }

  getMinorScalesQuizScore(): void {
    this.notesAttempted = this._minorScalesQuizService.notesAttempted;
    this.notesCorrect = this._minorScalesQuizService.notesCorrect;
    this.notesIncorrect = this._minorScalesQuizService.notesIncorrect;
    this.scalesAttempted = this._minorScalesQuizService.scalesAttempted;
    this.total = this._minorScalesQuizService.total;
  }

  ngOnInit(): void {
    this.getMinorScalesQuizScore();
  }

  ngDoCheck(): void {
    this.getMinorScalesQuizScore();
  }
}
