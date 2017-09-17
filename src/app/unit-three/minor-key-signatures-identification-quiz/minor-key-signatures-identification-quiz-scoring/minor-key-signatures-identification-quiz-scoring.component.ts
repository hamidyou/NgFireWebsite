import {Component, DoCheck, OnInit} from '@angular/core';
import {MinorKeySignaturesIdentificationQuizService} from '../minor-key-signatures-identification-quiz.service';

@Component({
  selector: 'app-minor-key-signatures-identification-quiz-scoring',
  templateUrl: './minor-key-signatures-identification-quiz-scoring.component.html',
  styleUrls: ['./minor-key-signatures-identification-quiz-scoring.component.css']
})
export class MinorKeySignaturesIdentificationQuizScoringComponent implements OnInit, DoCheck {
  public keysCorrect: number;
  public keysIncorrect: number;
  public keysAttempted: number;
  public total: number;

  constructor(private _minorKeySignaturesIdentificationQuizService: MinorKeySignaturesIdentificationQuizService) { }

  getMinorKeySignaturesIdentificationQuizScore(): void {
    this.keysCorrect = this._minorKeySignaturesIdentificationQuizService.keysCorrect;
    this.keysIncorrect = this._minorKeySignaturesIdentificationQuizService.keysIncorrect;
    this.keysAttempted = this._minorKeySignaturesIdentificationQuizService.keysAttempted;
    this.total = this._minorKeySignaturesIdentificationQuizService.total;
  }

  ngOnInit(): void {
    this.getMinorKeySignaturesIdentificationQuizScore();
  }

  ngDoCheck(): void {
    this.getMinorKeySignaturesIdentificationQuizScore();
  }

}
