import {Injectable} from '@angular/core';

import {NoteNamesService} from '../../note-names.service';
import {IntervalConstructionQuizQuestionDisplayService} from './interval-construction-quiz-question-display/interval-construction-quiz-question-display.service';

@Injectable()
export class IntervalConstructionQuizService {
  public currentAnswerNote: string;
  public root: string;
  public current: any;
  public pm: boolean;
  public pmm: boolean;
  public all: boolean;
  public correctAnswerNote: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public answerNotesAttempted: number;
  public answerNotesCorrect: number;
  public answerNotesIncorrect: number;
  public intervalsAttempted: number;
  public total: number;
  public noteNames: {
    natural: string[];
    all: string[];
    majorKeys: string[];
    minorKeys: string[];
    majorScales: string[];
    minorScales: string[];
    scaleTonics: string[];
    accidentals: string[]
  };
  public quizTitle: string;

  constructor(public _noteNamesService: NoteNamesService,
              public _intervalConstructionQuizQuestionDisplayService: IntervalConstructionQuizQuestionDisplayService) {
  }

  getQuestionVariables(): void {
    this.root = this._intervalConstructionQuizQuestionDisplayService.root;
    this.current = this._intervalConstructionQuizQuestionDisplayService.current;
    this.correctAnswerNote = this._intervalConstructionQuizQuestionDisplayService.correctAnswerNote;
    this.wrongAnswer = this._intervalConstructionQuizQuestionDisplayService.wrongAnswer;
    this.checkMark = this._intervalConstructionQuizQuestionDisplayService.checkMark;
    this.hideAnswer = this._intervalConstructionQuizQuestionDisplayService.hideAnswer;
    this.currentAnswerNote = this._intervalConstructionQuizQuestionDisplayService.currentAnswerNote;
  }

  getPerfectMajorIntervalConstructionQuizQuestion(): void {
    this.quizTitle = 'Perfect & Major';
    this._intervalConstructionQuizQuestionDisplayService.pm = true;
    this._intervalConstructionQuizQuestionDisplayService.pmm = false;
    this._intervalConstructionQuizQuestionDisplayService.all = false;
    this._intervalConstructionQuizQuestionDisplayService.getIntervalConstructionQuizQuestion();
    this.getQuestionVariables();
  }

  getPerfectMajorMinorIntervalConstructionQuizQuestion(): void {
    this.quizTitle = 'Perfect, Major, & minor';
    this._intervalConstructionQuizQuestionDisplayService.pmm = true;
    this._intervalConstructionQuizQuestionDisplayService.pm = false;
    this._intervalConstructionQuizQuestionDisplayService.all = false;
    this._intervalConstructionQuizQuestionDisplayService.getIntervalConstructionQuizQuestion();
    this.getQuestionVariables();
  }

  getAllIntervalConstructionQuizQuestion(): void {
    this.quizTitle = 'ALL';
    this._intervalConstructionQuizQuestionDisplayService.pmm = false;
    this._intervalConstructionQuizQuestionDisplayService.pm = false;
    this._intervalConstructionQuizQuestionDisplayService.all = true;
    this._intervalConstructionQuizQuestionDisplayService.getIntervalConstructionQuizQuestion();
    this.getQuestionVariables();
  }

  setInitialQuizVariables(): void {
    this.answerNotesAttempted = 0;
    this.answerNotesCorrect = 0;
    this.answerNotesIncorrect = 0;
    this.intervalsAttempted = 0;
    this.total = 0;
  }

  getAnswerOptions(): void {
    this.noteNames = this._noteNamesService.getNoteNamesOptions();
  }

  getNextQuestion(): void {
    this._intervalConstructionQuizQuestionDisplayService.getNextQuestion();
    this.getQuestionVariables();
  }

  checkAnswer(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.currentAnswerNote) {
      this.correctAnswerNote = true;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => {
        this.checkMark = false;
        this.getNextQuestion();
      }, 2000);
      this.answerNotesCorrect += 1;
      this.answerNotesAttempted += 1;
      this.intervalsAttempted += 1;
      this.totalPercentage();
    } else {
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 2000);
      this.answerNotesIncorrect += 1;
      this.totalPercentage();
    }
  }

  totalPercentage(): void {
    if (this.answerNotesCorrect > this.answerNotesIncorrect) {
      this.total = ((this.answerNotesCorrect - this.answerNotesIncorrect) / this.answerNotesAttempted);
    } else {
      this.total = 0;
    }
  }
}
