import {Component, OnInit} from '@angular/core';

import {MajorScaleQuizService} from './major-scale-quiz.service';

@Component({
  selector: 'app-major-scale-quiz',
  templateUrl: './major-scale-quiz.component.html',
  styleUrls: ['./major-scale-quiz.component.css']
})
export class MajorScaleQuizComponent implements OnInit {
  total: number = this._majorScaleQuizService.total;

  constructor(public _majorScaleQuizService: MajorScaleQuizService) { }

  startQuiz(): void {
    this._majorScaleQuizService.getMajorScaleQuizQuestion();
    this._majorScaleQuizService.getAnswerOptions();
    this._majorScaleQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  reset(): void {
    this.startQuiz();
  }

  ngOnInit(): void {
    this.startQuiz();
  }

}
