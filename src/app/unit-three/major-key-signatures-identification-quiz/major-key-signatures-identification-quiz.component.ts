import {Component, OnInit} from '@angular/core';
import {MajorKeySignaturesIdentificationQuizService} from './major-key-signatures-identification-quiz.service';

@Component({
  selector: 'app-major-key-signatures-identification-quiz',
  templateUrl: './major-key-signatures-identification-quiz.component.html',
  styleUrls: ['./major-key-signatures-identification-quiz.component.css']
})
export class MajorKeySignaturesIdentificationQuizComponent implements OnInit {
  total: number = this._majorKeySignaturesIdentificationQuizService.total;

  constructor(public _majorKeySignaturesIdentificationQuizService: MajorKeySignaturesIdentificationQuizService) { }

  startQuiz(): void {
    this._majorKeySignaturesIdentificationQuizService.getMajorKeySignaturesIdentificationQuizQuestion();
    this._majorKeySignaturesIdentificationQuizService.getAnswerOptions();
    this._majorKeySignaturesIdentificationQuizService.setInitialQuizVariables();
    this.total = 0;
  }

  reset(): void {
    this.startQuiz();
  }

  ngOnInit(): void {
    this.startQuiz();
  }
}
