import {Component, DoCheck, OnInit} from '@angular/core';

import {PianoQuizService} from '../piano-quiz.service';
import {PercentPipe} from '@angular/common';
import {DecimalPipe} from '@angular/common';

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

/*
  submitScores(firstName, lastName, googleId, uid, school, program, gradYear, total, timeToComplete, quiz) {
    if (this.notesCorrect >= 20) {
      this.db.object('users/' + school + '/' + program + '/' + lastName + firstName).set({
        firstname: firstName,
        lastname: lastName,
        googleId: googleId,
        school: school,
        program: program,
        uid: uid,
        notesCorrect: this.notesCorrect,
        notesIncorrect: this.notesIncorrect,
        notesAttempted: this.notesAttempted,
        octavesCorrect: this.octavesCorrect,
        octavesIncorrect: this.octavesIncorrect,
        octavesAttempted: this.octavesAttempted,
        total: total,
        timeSubmitted: Date.now(),
        timeToComplete: timeToComplete,
        quiz: 'Piano Note Identification Quiz'
      });
      this.db.object('users/' + school + '/' + gradYear + '/' + lastName + firstName).set({
        firstname: firstName,
        lastname: lastName,
        googleId: googleId,
        school: school,
        program: program,
        gradYear: gradYear,
        uid: uid
      });
      this.db.object('users/all/' + uid).set({
        firstname: firstName,
        lastname: lastName,
        googleId: googleId,
        school: school,
        program: program,
        gradYear: gradYear,
        uid: uid
      });
      document.getElementById('userRegistrationForm').style.display = 'none';
    }
  }
*/

  ngOnInit(): void {
    this.getPianoQuizScore();
  }

  ngDoCheck(): void {
    this.getPianoQuizScore();
  }

}
