import { Component, OnInit } from '@angular/core';

import {MinorScalesQuizService} from './minor-scales-quiz.service';

@Component({
  selector: 'app-minor-scales-quiz',
  templateUrl: './minor-scales-quiz.component.html',
  styleUrls: ['./minor-scales-quiz.component.css']
})
export class MinorScalesQuizComponent implements OnInit {
  total: number = this._minorScalesQuizService.total;

  constructor(public _minorScalesQuizService: MinorScalesQuizService) { }

  startQuiz(): void {
    this._minorScalesQuizService.getMinorScalesQuizQuestion();
    this._minorScalesQuizService.getAnswerOptions();
    this._minorScalesQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  ngOnInit(): void {
    this.startQuiz();
  }

}
