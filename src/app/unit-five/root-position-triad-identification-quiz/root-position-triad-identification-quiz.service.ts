import {Injectable} from '@angular/core';

import {NoteNamesService} from '../../note-names.service';
import {RootPositionTriadIdentificationQuizQuestionDisplayService} from './root-position-triad-identification-quiz-question-display/root-position-triad-identification-quiz-question-display.service';

@Injectable()
export class RootPositionTriadIdentificationQuizService {
  public noteNames;
  public correctTriad: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public triadsCorrect: number;
  public triadsIncorrect: number;
  public triadsAttempted: number;
  public total: number;
  public quizTitle: string;
  private root: string;
  private quality: string;
  private current: any;
  private currentQuality: any;
  public octave: any;
  public qualities: any;

  constructor(private _noteNamesService: NoteNamesService,
              private _rootPositionTriadIdentificationQuizQuestionDisplayService: RootPositionTriadIdentificationQuizQuestionDisplayService) {
  }

  getQuestionVariables(): void {
    this.current = this._rootPositionTriadIdentificationQuizQuestionDisplayService.current;
    this.currentQuality = this._rootPositionTriadIdentificationQuizQuestionDisplayService.currentQuality;
    this.octave = this._rootPositionTriadIdentificationQuizQuestionDisplayService.currentOctave;
    this.root = this._rootPositionTriadIdentificationQuizQuestionDisplayService.root;
    this.quality = this._rootPositionTriadIdentificationQuizQuestionDisplayService.quality;
    this.checkMark = this._rootPositionTriadIdentificationQuizQuestionDisplayService.checkMark;
    this.wrongAnswer = this._rootPositionTriadIdentificationQuizQuestionDisplayService.wrongAnswer;
    this.hideAnswer = this._rootPositionTriadIdentificationQuizQuestionDisplayService.hideAnswer;
  }

  getMajorMinorRootPositionTriadIdentificationQuizQuestion(): void {
    this.quizTitle = 'Major & minor';
    this.qualities = ['Major', 'minor'];
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.Mm = true;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.MA = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.md = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.all = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getRootPositionTriadQuizQuestion();
    this.getQuestionVariables();
  }

  getMajorAugmentedRootPositionTriadIdentificationQuizQuestion(): void {
    this.quizTitle = 'Major & Augmented';
    this.qualities = ['Augmented', 'Major'];
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.Mm = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.MA = true;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.md = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.all = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getRootPositionTriadQuizQuestion();
    this.getQuestionVariables();
  }

  getMinorDiminishedRootPositionTriadIdentificationQuizQuestion(): void {
    this.quizTitle = 'minor & diminished';
    this.qualities = ['minor', 'diminished'];
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.Mm = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.MA = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.md = true;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.all = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getRootPositionTriadQuizQuestion();
    this.getQuestionVariables();
  }

  getAllRootPositionTriadIdentificationQuizQuestion(): void {
    this.quizTitle = 'ALL';
    this.qualities = ['Augmented', 'Major', 'minor', 'diminished'];
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.Mm = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.MA = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.md = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.all = true;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getRootPositionTriadQuizQuestion();
    this.getQuestionVariables();
  }

  setInitialQuizVariables(): void {
    this.triadsAttempted = 0;
    this.triadsCorrect = 0;
    this.triadsIncorrect = 0;
  }

  getNextQuestion(): void {
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getNextQuestion();
    this.getQuestionVariables();
  }

  totalPercentage(): void {
    if (this.triadsCorrect > this.triadsIncorrect) {
      this.total = ((this.triadsCorrect - this.triadsIncorrect) / this.triadsAttempted);
    } else {
      this.total = 0;
    }
  }

  checkTriad(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.quality) {
      this.correctTriad = true;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => {
        this.checkMark = false;
        this.getNextQuestion();
      }, 2000);
      this.triadsCorrect += 1;
      this.triadsAttempted += 1;
      this.totalPercentage();
    } else {
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 2000);
      this.triadsIncorrect += 1;
      this.totalPercentage();
    }
  }
}
