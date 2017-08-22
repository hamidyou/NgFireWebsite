import { Component, OnInit } from '@angular/core';
import {MajorScaleQuizService} from './major-scale-quiz.service';
import {MajorScaleQuizQuestionDisplayService} from './major-scale-quiz-question-display/major-scale-quiz-question-display.service';

@Component({
  selector: 'app-major-scale-quiz',
  templateUrl: './major-scale-quiz.component.html',
  styleUrls: ['./major-scale-quiz.component.css']
})
export class MajorScaleQuizComponent implements OnInit {
  total: number = this._majorScaleQuizService.total;

  constructor(public _majorScaleQuizService: MajorScaleQuizService, public _majorScaleQuizQuestionDisplayService: MajorScaleQuizQuestionDisplayService) { }

  startQuiz(): void {
    this._majorScaleQuizService.getMajorScaleQuizQuestion();
    this._majorScaleQuizService.getAnswerOptions();
    this._majorScaleQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  ngOnInit(): void {
    this.startQuiz();
  }

}
