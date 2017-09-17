import {Component, OnInit} from '@angular/core';

import {MinorKeySignaturesIdentificationQuizService} from '../minor-key-signatures-identification-quiz.service';

@Component({
  selector: 'app-minor-key-signatures-identification-quiz-answer-options',
  templateUrl: './minor-key-signatures-identification-quiz-answer-options.component.html',
  styleUrls: ['./minor-key-signatures-identification-quiz-answer-options.component.css']
})
export class MinorKeySignaturesIdentificationQuizAnswerOptionsComponent implements OnInit {
  public correctAnswer: boolean;
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public keysCorrect: number;
  public keysIncorrect: number;
  public keysAttempted: number;
  public current: any;
  public noteNames: any;

  constructor(public _minorKeySignaturesIdentificationQuizService: MinorKeySignaturesIdentificationQuizService) {
  }

  checkAnswer(event): void {
    this._minorKeySignaturesIdentificationQuizService.checkAnswer(event);
  }

  getQuizAnswerOptionsVariables(): void {
    this.keysAttempted = this._minorKeySignaturesIdentificationQuizService.keysAttempted;
    this.keysIncorrect = this._minorKeySignaturesIdentificationQuizService.keysIncorrect;
    this.keysCorrect = this._minorKeySignaturesIdentificationQuizService.keysCorrect;
    this.correctAnswer = this._minorKeySignaturesIdentificationQuizService.correctAnswer;
    this.wrongAnswer = this._minorKeySignaturesIdentificationQuizService.wrongAnswer;
    this.checkMark = this._minorKeySignaturesIdentificationQuizService.checkMark;
    this.hideAnswer = this._minorKeySignaturesIdentificationQuizService.hideAnswer;
    this.noteNames = this._minorKeySignaturesIdentificationQuizService.noteNames;
    this.current = this._minorKeySignaturesIdentificationQuizService.current;
  }


  ngOnInit(): void {
    this.getQuizAnswerOptionsVariables();
  }

}
