import {Component, DoCheck, OnInit} from '@angular/core';
import {NoteQuizService} from '../note-quiz.service';

@Component({
  selector: 'app-note-quiz-scoring',
  templateUrl: './note-quiz-scoring.component.html',
  styleUrls: ['./note-quiz-scoring.component.css']
})
export class NoteQuizScoringComponent implements OnInit, DoCheck {
  public notesCorrect: number;
  public notesIncorrect: number;
  public notesAttempted: number;
  public octavesCorrect: number;
  public octavesIncorrect: number;
  public octavesAttempted: number;
  public clefsAttempted: number;
  public clefsCorrect: number;
  public clefsIncorrect: number;
  public total: number;

  constructor(private _noteQuizService: NoteQuizService) {
  }

  getNoteQuizScore(): void {
    this.notesCorrect = this._noteQuizService.notesCorrect;
    this.notesIncorrect = this._noteQuizService.notesIncorrect;
    this.notesAttempted = this._noteQuizService.notesAttempted;
    this.octavesCorrect = this._noteQuizService.octavesCorrect;
    this.octavesIncorrect = this._noteQuizService.octavesIncorrect;
    this.octavesAttempted = this._noteQuizService.octavesAttempted;
    this.clefsAttempted = this._noteQuizService.clefsAttempted;
    this.clefsCorrect = this._noteQuizService.clefsCorrect;
    this.clefsIncorrect = this._noteQuizService.clefsIncorrect;
    this.total = this._noteQuizService.total;
  }

  ngOnInit(): void {
    this.getNoteQuizScore();
  }

  ngDoCheck(): void {
    this.getNoteQuizScore();
  }
}
