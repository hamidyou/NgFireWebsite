import { Component, OnInit } from '@angular/core';
import {ScaleIdentificationQuizService} from './scale-identification-quiz.service';

@Component({
  selector: 'app-scale-identification-quiz',
  templateUrl: './scale-identification-quiz.component.html',
  styleUrls: ['./scale-identification-quiz.component.css']
})
export class ScaleIdentificationQuizComponent implements OnInit {
  total: number = this._scaleIdentificationQuizService.total;

  constructor(public _scaleIdentificationQuizService: ScaleIdentificationQuizService) { }

  startQuiz(): void {
    this._scaleIdentificationQuizService.getScaleIdentificationQuizQuestion();
    this._scaleIdentificationQuizService.getAnswerOptions();
    this._scaleIdentificationQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  ngOnInit(): void {
    this.startQuiz();
  }

}
