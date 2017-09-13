import { Component, OnInit } from '@angular/core';
import {MajorKeySignaturesIdentificationQuizService} from '../major-key-signatures-identification-quiz/major-key-signatures-identification-quiz.service';

@Component({
  selector: 'app-major-key-signatures-construction-quiz',
  templateUrl: './major-key-signatures-construction-quiz.component.html',
  styleUrls: ['./major-key-signatures-construction-quiz.component.css']
})
export class MajorKeySignaturesConstructionQuizComponent implements OnInit {
  total: number = this._majorKeySignaturesIdentificationQuizService.total;

  constructor(public _majorKeySignaturesIdentificationQuizService: MajorKeySignaturesIdentificationQuizService) { }

  startQuiz(): void {
    this._majorKeySignaturesIdentificationQuizService.getMajorKeySignaturesIdentificationQuizQuestion();
    this._majorKeySignaturesIdentificationQuizService.getAnswerOptions();
    this._majorKeySignaturesIdentificationQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  ngOnInit(): void {
    this.startQuiz();
  }
}
