import {Component, DoCheck, OnInit} from '@angular/core';

import {PianoQuizService} from '../piano-quiz.service';
import {PercentPipe} from '@angular/common';
import {DecimalPipe} from '@angular/common';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-piano-quiz-scoring',
  templateUrl: './piano-quiz-scoring.component.html',
  styleUrls: ['./piano-quiz-scoring.component.css'],
})
export class PianoQuizScoringComponent implements OnInit, DoCheck {
  public notesCorrect: number;
  public notesIncorrect: number;
  public notesAttempted: number;
  public octavesCorrect: number;
  public octavesIncorrect: number;
  public octavesAttempted: number;
  public total: number;

  constructor(private _pianoQuizService: PianoQuizService) {
  }

  getPianoQuizScore(): void {
    this.notesCorrect = this._pianoQuizService.notesCorrect;
    this.notesIncorrect = this._pianoQuizService.notesIncorrect;
    this.notesAttempted = this._pianoQuizService.notesAttempted;
    this.octavesCorrect = this._pianoQuizService.octavesCorrect;
    this.octavesIncorrect = this._pianoQuizService.octavesIncorrect;
    this.octavesAttempted = this._pianoQuizService.octavesAttempted;
    this.total = this._pianoQuizService.total;
  }

  ngOnInit(): void {
    this.getPianoQuizScore();
  }

  ngDoCheck(): void {
    this.getPianoQuizScore();
  }

}
