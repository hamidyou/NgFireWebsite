import {Component, DoCheck, OnInit} from '@angular/core';
import {PianoQuizService} from '../piano-quiz.service';

@Component({
  selector: 'app-piano-quiz-answer-options',
  templateUrl: './piano-quiz-answer-options.component.html',
  styleUrls: ['./piano-quiz-answer-options.component.css']
})
export class PianoQuizAnswerOptionsComponent implements OnInit, DoCheck{
  hideAnswer;
  correctNote;
  correctOctave;
  noteNames;
  octaveClass;
  current;
  wrongAnswer;

  constructor(private _pianoQuizService: PianoQuizService) {}

  checkNote(event): void {
    this._pianoQuizService.checkNote(event);
  }

  checkOctave(event): void {
    this._pianoQuizService.checkOctave(event);
  }

  getQuizAnswerOptionsVariables(): void {
    this.hideAnswer = this._pianoQuizService.hideAnswer;
    this.correctNote = this._pianoQuizService.correctNote;
    this.correctOctave = this._pianoQuizService.correctOctave;
    this.noteNames = this._pianoQuizService.noteNames;
    this.octaveClass = this._pianoQuizService.octaveClass;
    this.current = this._pianoQuizService.current;
    this.wrongAnswer = this._pianoQuizService.wrongAnswer;
  }

  ngOnInit(): void {
    this.getQuizAnswerOptionsVariables();
  }

  ngDoCheck(): void {
    this.getQuizAnswerOptionsVariables();
  }

}
