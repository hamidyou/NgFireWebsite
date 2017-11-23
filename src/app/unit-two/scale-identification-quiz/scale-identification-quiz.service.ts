import {Injectable} from '@angular/core';
import {ScaleIdentificationQuizQuestionDisplayService} from './scale-identification-quiz-question-display/scale-identification-quiz-question-display.service';
import {NoteNamesService} from '../../note-names.service';

@Injectable()
export class ScaleIdentificationQuizService {
  public correctTonic: boolean;
  public correctScale: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public tonicsAttempted: number;
  public tonicsCorrect: number;
  public tonicsIncorrect: number;
  public scalesAttempted: number;
  public scalesCorrect: number;
  public scalesIncorrect: number;
  public current: any;
  public total: any;
  public scaleQualities: any;
  public noteNames: any;

  constructor(private _scaleIdentificationQuizQuestionDisplayService: ScaleIdentificationQuizQuestionDisplayService, private _noteNamesService: NoteNamesService) { }

  getScaleIdentificationQuizQuestion(): void {
    this._scaleIdentificationQuizQuestionDisplayService.getScaleIdentificationQuizQuestion();
    this.correctTonic = this._scaleIdentificationQuizQuestionDisplayService.correctTonic;
    this.correctScale = this._scaleIdentificationQuizQuestionDisplayService.correctScale;
    this.wrongAnswer = this._scaleIdentificationQuizQuestionDisplayService.wrongAnswer;
    this.checkMark = this._scaleIdentificationQuizQuestionDisplayService.checkMark;
    this.hideAnswer = this._scaleIdentificationQuizQuestionDisplayService.hideAnswer;
    this.current = this._scaleIdentificationQuizQuestionDisplayService.current;
  }

  setInitialQuizVariables(): void {
    this.correctTonic = false;
    this.correctScale = false;
    this.wrongAnswer = false;
    this.checkMark = false;
    this.hideAnswer = true;
    this.tonicsAttempted = 0;
    this.tonicsCorrect = 0;
    this.tonicsIncorrect = 0;
    this.scalesAttempted = 0;
    this.scalesCorrect = 0;
    this.scalesIncorrect = 0;
    this.total = 0;
  }

  getAnswerOptions(): void {
    this.noteNames = this._noteNamesService.getNoteNamesOptions();
    this.scaleQualities = ['Major', 'Natural Minor', 'Harmonic Minor', 'Melodic Minor'];
  }

  checkTonic(event): void {
    this.current = this._scaleIdentificationQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.tonic) {
      this.correctTonic = true;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => this.checkMark = false, 2000);
      this.tonicsCorrect += 1;
      this.tonicsAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.tonicsIncorrect += 1;
    }
    this.totalPercentage();
  }

  checkScale(event): void {
    this.current = this._scaleIdentificationQuizQuestionDisplayService.current;
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.current.scale) {
      this.correctScale = true;
      this.correctTonic = false;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => this.getScaleIdentificationQuizQuestion(), 6500);
      this.scalesCorrect += 1;
      this.scalesAttempted += 1;
    } else {
      this.wrongAnswer = true;
      setTimeout(() => this.wrongAnswer = false, 2000);
      this.scalesIncorrect += 1;
    }
    this.totalPercentage();
  }

  totalPercentage(): void {
    if ((this.tonicsCorrect + this.scalesCorrect) > (this.tonicsIncorrect + this.scalesIncorrect)) {
      this.total = (((this.tonicsCorrect + this.scalesCorrect) - (this.tonicsIncorrect + this.scalesIncorrect)) / (this.tonicsAttempted + this.scalesAttempted));
    } else {
      this.total = 0;
    }
  }

}
