import {Component, OnInit} from '@angular/core';

import {MinorKeySignaturesConstructionQuizService} from './minor-key-signatures-construction-quiz.service';

@Component({
  selector: 'app-minor-key-signatures-construction-quiz',
  templateUrl: './minor-key-signatures-construction-quiz.component.html',
  styleUrls: ['./minor-key-signatures-construction-quiz.component.css']
})
export class MinorKeySignaturesConstructionQuizComponent implements OnInit {
  total: number = this._minorKeySignaturesConstructionQuizService.total;

  constructor(public _minorKeySignaturesConstructionQuizService: MinorKeySignaturesConstructionQuizService) { }

  startQuiz(): void {
    this._minorKeySignaturesConstructionQuizService.getMinorKeySignaturesConstructionQuizQuestion();
    this._minorKeySignaturesConstructionQuizService.getAnswerOptions();
    this._minorKeySignaturesConstructionQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  reset(): void {
    this.startQuiz();
  }

  ngOnInit(): void {
    this.startQuiz();
  }
}
