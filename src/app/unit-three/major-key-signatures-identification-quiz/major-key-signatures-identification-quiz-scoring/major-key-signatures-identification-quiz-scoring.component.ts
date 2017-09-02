import {Component, DoCheck, OnInit} from '@angular/core';
import {MajorKeySignaturesIdentificationQuizService} from '../major-key-signatures-identification-quiz.service';

@Component({
  selector: 'app-major-key-signatures-identification-quiz-scoring',
  templateUrl: './major-key-signatures-identification-quiz-scoring.component.html',
  styleUrls: ['./major-key-signatures-identification-quiz-scoring.component.css']
})
export class MajorKeySignaturesIdentificationQuizScoringComponent implements OnInit, DoCheck {
  public keysCorrect: number;
  public keysIncorrect: number;
  public keysAttempted: number;
  public total: number;

  constructor(private _majorKeySignaturesIdentificationQuizService: MajorKeySignaturesIdentificationQuizService) { }

  getMajorKeySignaturesIdentificationQuizScore(): void {
    this.keysCorrect = this._majorKeySignaturesIdentificationQuizService.keysCorrect;
    this.keysIncorrect = this._majorKeySignaturesIdentificationQuizService.keysIncorrect;
    this.keysAttempted = this._majorKeySignaturesIdentificationQuizService.keysAttempted;
    this.total = this._majorKeySignaturesIdentificationQuizService.total;
  }

  ngOnInit(): void {
    this.getMajorKeySignaturesIdentificationQuizScore();
  }

  ngDoCheck(): void {
    this.getMajorKeySignaturesIdentificationQuizScore();
  }

}
