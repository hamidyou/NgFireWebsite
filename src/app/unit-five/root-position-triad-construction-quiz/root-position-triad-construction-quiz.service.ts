import {Injectable} from '@angular/core';

@Injectable()
export class RootPositionTriadConstructionQuizService {
  public noteNames;
  public correctRoot: boolean;
  public correctThird: boolean;
  public correctFifth: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public rootsCorrect: number;
  public rootsIncorrect: number;
  public rootsAttempted: number;
  public thirdsCorrect: number;
  public thirdsIncorrect: number;
  public thirdsAttempted: number;
  public fifthsCorrect: number;
  public fifthsIncorrect: number;
  public fifthsAttempted: number;
  public triadsAttempted: number;
  public total: number;
  public quizTitle: string;
  private root: string;
  private third: string;
  private fifth: string;
  private quality: string;
  private current: any;
  private currentQuality: any;
  private octave: any;

  constructor(private _noteNamesService: NoteNamesService,
              private _rootPositionTriadIdentificationQuizQuestionDisplayService: RootPositionTriadIdentificationQuizQuestionDisplayService) {
  }

  getQuestionVariables(): void {
    this.current = this._rootPositionTriadIdentificationQuizQuestionDisplayService.current;
    this.currentQuality = this._rootPositionTriadIdentificationQuizQuestionDisplayService.currentQuality;
    this.octave = this._rootPositionTriadIdentificationQuizQuestionDisplayService.currentOctave;
    this.root = this._rootPositionTriadIdentificationQuizQuestionDisplayService.root;
    this.third = this._rootPositionTriadIdentificationQuizQuestionDisplayService.third;
    this.fifth = this._rootPositionTriadIdentificationQuizQuestionDisplayService.fifth;
    this.quality = this._rootPositionTriadIdentificationQuizQuestionDisplayService.quality;
    this.checkMark = this._rootPositionTriadIdentificationQuizQuestionDisplayService.checkMark;
    this.wrongAnswer = this._rootPositionTriadIdentificationQuizQuestionDisplayService.wrongAnswer;
    this.hideAnswer = this._rootPositionTriadIdentificationQuizQuestionDisplayService.hideAnswer;
  }

  getMajorMinorRootPositionTriadIdentificationQuizQuestion(): void {
    this.quizTitle = 'Major & minor';
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.Mm = true;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.MA = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.md = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.all = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getRootPositionTriadQuizQuestion();
    this.getQuestionVariables();
  }

  getMajorAugmentedRootPositionTriadIdentificationQuizQuestion(): void {
    this.quizTitle = 'Major & Augmented';
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.Mm = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.MA = true;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.md = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.all = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getRootPositionTriadQuizQuestion();
    this.getQuestionVariables();
  }

  getMinorDiminishedRootPositionTriadIdentificationQuizQuestion(): void {
    this.quizTitle = 'minor & diminished';
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.Mm = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.MA = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.md = true;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.all = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getRootPositionTriadQuizQuestion();
    this.getQuestionVariables();
  }

  getAllRootPositionTriadIdentificationQuizQuestion(): void {
    this.quizTitle = 'ALL';
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.Mm = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.MA = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.md = false;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.all = true;
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getRootPositionTriadQuizQuestion();
    this.getQuestionVariables();
  }

  setInitialQuizVariables(): void {
    this.rootsAttempted = 0;
    this.rootsCorrect = 0;
    this.rootsIncorrect = 0;
    this.thirdsAttempted = 0;
    this.thirdsCorrect = 0;
    this.thirdsIncorrect = 0;
    this.fifthsAttempted = 0;
    this.fifthsCorrect = 0;
    this.fifthsIncorrect = 0;
    this.triadsAttempted = 0;
  }

  getAnswerOptions(): void {
    this.noteNames = this._noteNamesService.getNoteNamesOptions();
  }

  getNextQuestion(): void {
    this._rootPositionTriadIdentificationQuizQuestionDisplayService.getNextQuestion();
    this.getQuestionVariables();
  }

  totalPercentage(): void {
    if ((this.rootsCorrect + this.thirdsCorrect + this.fifthsCorrect) > (this.rootsIncorrect + this.thirdsIncorrect + this.thirdsIncorrect)) {
      this.total = (((this.rootsCorrect + this.thirdsCorrect + this.fifthsCorrect) - (this.rootsIncorrect + this.thirdsIncorrect + this.thirdsIncorrect)) / (this.rootsAttempted + this.thirdsAttempted + this.fifthsAttempted));
    } else {
      this.total = 0;
    }
  };

  checkRoot(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.root) {
      this.correctRoot = true;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => {
        this.checkMark = false;
      }, 2000);
      this.rootsCorrect += 1;
      this.rootsAttempted += 1;
      this.totalPercentage();
    } else {
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 2000);
      this.rootsIncorrect += 1;
      this.totalPercentage();
    }
  }

  checkThird(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.root) {
      this.correctRoot = false;
      this.correctThird = true;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => {
        this.checkMark = false;
      }, 2000);
      this.thirdsCorrect += 1;
      this.thirdsAttempted += 1;
      this.totalPercentage();
    } else {
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 2000);
      this.thirdsIncorrect += 1;
      this.totalPercentage();
    }
  }

  checkFifth(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    if (value === this.root) {
      this.correctFifth = true;
      this.correctThird = false;
      this.checkMark = true;
      this.hideAnswer = false;
      setTimeout(() => {
        this.checkMark = false;
        this.getNextQuestion();
      }, 3000);
      this.fifthsCorrect += 1;
      this.fifthsAttempted += 1;
      this.totalPercentage();
    } else {
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 2000);
      this.fifthsIncorrect += 1;
      this.totalPercentage();
    }
  }
}
}
