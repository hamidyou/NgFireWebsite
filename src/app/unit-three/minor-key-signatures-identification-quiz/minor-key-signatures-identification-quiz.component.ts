import {Component, OnInit} from '@angular/core';
import {MinorKeySignaturesIdentificationQuizService} from './minor-key-signatures-identification-quiz.service';

@Component({
  selector: 'app-minor-key-signatures-identification-quiz',
  templateUrl: './minor-key-signatures-identification-quiz.component.html',
  styleUrls: ['./minor-key-signatures-identification-quiz.component.css']
})
export class MinorKeySignaturesIdentificationQuizComponent implements OnInit {
  total: number = this._minorKeySignaturesIdentificationQuizService.total;

  constructor(public _minorKeySignaturesIdentificationQuizService: MinorKeySignaturesIdentificationQuizService) { }

  startQuiz(): void {
    this._minorKeySignaturesIdentificationQuizService.getMinorKeySignaturesIdentificationQuizQuestion();
    this._minorKeySignaturesIdentificationQuizService.getAnswerOptions();
    this._minorKeySignaturesIdentificationQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  reset(): void {
    this.startQuiz();
  }

  ngOnInit(): void {
    this.startQuiz();
  }
}
