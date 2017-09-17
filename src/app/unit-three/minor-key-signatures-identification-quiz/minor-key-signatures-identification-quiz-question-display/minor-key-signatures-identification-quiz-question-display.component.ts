import {Component, DoCheck, OnInit} from '@angular/core';
import {MinorKeySignaturesIdentificationQuizService} from '../minor-key-signatures-identification-quiz.service';
import {MinorKeySignaturesIdentificationQuizQuestionDisplayService} from './minor-key-signatures-identification-quiz-question-display.service';

@Component({
  selector: 'app-minor-key-signatures-identification-quiz-question-display',
  templateUrl: './minor-key-signatures-identification-quiz-question-display.component.html',
  styleUrls: ['./minor-key-signatures-identification-quiz-question-display.component.css']
})
export class MinorKeySignaturesIdentificationQuizQuestionDisplayComponent implements OnInit, DoCheck {
  public hideAnswer: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public current: any;
  public noteNames: any;
  public bank: any;
  public usedBank: any;

  constructor(private _minorKeySignaturesIdentificationQuizService: MinorKeySignaturesIdentificationQuizService, private _minorKeySignaturesIdentificationQuizQuestionDisplayService: MinorKeySignaturesIdentificationQuizQuestionDisplayService) { }

  checkVariables(): void {
    this.wrongAnswer = this._minorKeySignaturesIdentificationQuizService.wrongAnswer;
    this.checkMark = this._minorKeySignaturesIdentificationQuizService.checkMark;
    this.hideAnswer = this._minorKeySignaturesIdentificationQuizService.hideAnswer;
    this.noteNames = this._minorKeySignaturesIdentificationQuizService.noteNames;
    this.current = this._minorKeySignaturesIdentificationQuizService.current;
    this.bank = this._minorKeySignaturesIdentificationQuizQuestionDisplayService.bank;
    this.usedBank = this._minorKeySignaturesIdentificationQuizQuestionDisplayService.usedBank;
  }

  ngOnInit(): void {
    this.checkVariables();
  }

  ngDoCheck(): void {
    this.checkVariables();
  }

}
