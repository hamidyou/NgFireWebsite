import {Component, OnInit} from '@angular/core';

import {MajorKeySignaturesIdentificationQuizService} from '../major-key-signatures-identification-quiz.service';

@Component({
  selector: 'app-major-key-signatures-identification-quiz-answer-options',
  templateUrl: './major-key-signatures-identification-quiz-answer-options.component.html',
  styleUrls: ['./major-key-signatures-identification-quiz-answer-options.component.css']
})
export class MajorKeySignaturesIdentificationQuizAnswerOptionsComponent implements OnInit {
  public correctAnswer: boolean;
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public keysCorrect: number;
  public keysIncorrect: number;
  public keysAttempted: number;
  public current: any;
  public noteNames: any;

  constructor(public _majorKeySignaturesIdentificationQuizService: MajorKeySignaturesIdentificationQuizService) {
  }

  checkAnswer(event): void {
    this._majorKeySignaturesIdentificationQuizService.checkAnswer(event);
  }

  getQuizAnswerOptionsVariables(): void {
    this.keysAttempted = this._majorKeySignaturesIdentificationQuizService.keysAttempted;
    this.keysIncorrect = this._majorKeySignaturesIdentificationQuizService.keysIncorrect;
    this.keysCorrect = this._majorKeySignaturesIdentificationQuizService.keysCorrect;
    this.correctAnswer = this._majorKeySignaturesIdentificationQuizService.correctAnswer;
    this.wrongAnswer = this._majorKeySignaturesIdentificationQuizService.wrongAnswer;
    this.checkMark = this._majorKeySignaturesIdentificationQuizService.checkMark;
    this.hideAnswer = this._majorKeySignaturesIdentificationQuizService.hideAnswer;
    this.noteNames = this._majorKeySignaturesIdentificationQuizService.noteNames;
    this.current = this._majorKeySignaturesIdentificationQuizService.current;
  }


  ngOnInit(): void {
    this.getQuizAnswerOptionsVariables();
  }

}
