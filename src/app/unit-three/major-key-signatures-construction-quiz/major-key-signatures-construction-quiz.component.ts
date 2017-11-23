import {Component, OnInit} from '@angular/core';

import {MajorKeySignaturesConstructionQuizService} from './major-key-signatures-construction-quiz.service';

@Component({
  selector: 'app-major-key-signatures-construction-quiz',
  templateUrl: './major-key-signatures-construction-quiz.component.html',
  styleUrls: ['./major-key-signatures-construction-quiz.component.css']
})
export class MajorKeySignaturesConstructionQuizComponent implements OnInit {
  total: number = this._majorKeySignaturesConstructionQuizService.total;

  constructor(public _majorKeySignaturesConstructionQuizService: MajorKeySignaturesConstructionQuizService) { }

  startQuiz(): void {
    this._majorKeySignaturesConstructionQuizService.getMajorKeySignaturesConstructionQuizQuestion();
    this._majorKeySignaturesConstructionQuizService.getAnswerOptions();
    this._majorKeySignaturesConstructionQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  reset(): void {
    this.startQuiz();
  }

  ngOnInit(): void {
    this.startQuiz();
  }
}
