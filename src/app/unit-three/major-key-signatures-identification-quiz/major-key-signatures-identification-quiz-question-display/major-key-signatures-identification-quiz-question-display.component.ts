import {Component, DoCheck, OnInit} from '@angular/core';
import {MajorKeySignaturesIdentificationQuizService} from '../major-key-signatures-identification-quiz.service';
import {MajorKeySignaturesIdentificationQuizQuestionDisplayService} from './major-key-signatures-identification-quiz-question-display.service';

@Component({
  selector: 'app-major-key-signatures-identification-quiz-question-display',
  templateUrl: './major-key-signatures-identification-quiz-question-display.component.html',
  styleUrls: ['./major-key-signatures-identification-quiz-question-display.component.css']
})
export class MajorKeySignaturesIdentificationQuizQuestionDisplayComponent implements OnInit, DoCheck {
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public current: any;
  public noteNames: any;
  public bank: any;
  public usedBank: any;

  constructor(private _majorKeySignaturesIdentificationQuizService: MajorKeySignaturesIdentificationQuizService, private _majorKeySignaturesIdentificationQuizQuestionDisplayService: MajorKeySignaturesIdentificationQuizQuestionDisplayService) { }

  checkVariables(): void {
    this.wrongAnswer = this._majorKeySignaturesIdentificationQuizService.wrongAnswer;
    this.checkMark = this._majorKeySignaturesIdentificationQuizService.checkMark;
    this.hideAnswer = this._majorKeySignaturesIdentificationQuizService.hideAnswer;
    this.noteNames = this._majorKeySignaturesIdentificationQuizService.noteNames;
    this.current = this._majorKeySignaturesIdentificationQuizService.current;
    this.bank = this._majorKeySignaturesIdentificationQuizQuestionDisplayService.bank;
    this.usedBank = this._majorKeySignaturesIdentificationQuizQuestionDisplayService.usedBank;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }

}
