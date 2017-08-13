import {Component, DoCheck, OnInit} from '@angular/core';

import {PianoQuizService} from '../piano-quiz.service';

@Component({
  selector: 'app-piano-quiz-question-display',
  templateUrl: './piano-quiz-question-display.component.html',
  styleUrls: ['./piano-quiz-question-display.component.css']
})
export class PianoQuizQuestionDisplayComponent implements OnInit, DoCheck {
  public current: any;
  public correctNote: boolean;
  public correctOctave: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;

  constructor(private _pianoQuizService: PianoQuizService) {
  }

  getPianoQuizQuestion(): void {
    this.current = this._pianoQuizService.current;
    this.correctNote = this._pianoQuizService.correctNote;
    this.correctOctave = this._pianoQuizService.correctOctave;
    this.wrongAnswer = this._pianoQuizService.wrongAnswer;
    this.checkMark = this._pianoQuizService.checkMark;
  }

  ngOnInit(): void {
    this.getPianoQuizQuestion();
  }

  ngDoCheck(): void {
    this.getPianoQuizQuestion();
  }
}
