import {Component} from '@angular/core';
import {RootPositionTriadIdentificationQuizService} from './root-position-triad-identification-quiz.service';

@Component({
  selector: 'app-root-position-triad-identification-quiz',
  templateUrl: './root-position-triad-identification-quiz.component.html',
  styleUrls: ['./root-position-triad-identification-quiz.component.css']
})
export class RootPositionTriadIdentificationQuizComponent {
  public total: number;
  public quizTitle: string;

  constructor(private _rootPositionTriadIdentificationQuizService: RootPositionTriadIdentificationQuizService) {
  }

  startMajorMinorRootPositionTriadIdentificationQuiz(): void {
    this.quizTitle = this._rootPositionTriadIdentificationQuizService.quizTitle;
    this._rootPositionTriadIdentificationQuizService.getMajorMinorRootPositionTriadIdentificationQuizQuestion();
    this.total = 0;
  }

  startMajorAugmentedRootPositionTriadIdentificationQuiz(): void {
    this.quizTitle = this._rootPositionTriadIdentificationQuizService.quizTitle;
    this._rootPositionTriadIdentificationQuizService.getMajorAugmentedRootPositionTriadIdentificationQuizQuestion();
    this.total = 0;
  }

  startMinorDiminishedRootPositionTriadIdentificationQuiz(): void {
    this.quizTitle = this._rootPositionTriadIdentificationQuizService.quizTitle;
    this._rootPositionTriadIdentificationQuizService.getMinorDiminishedRootPositionTriadIdentificationQuizQuestion();
    this.total = 0;
  }

  startAllRootPositionTriadIdentificationQuiz(): void {
    this.quizTitle = this._rootPositionTriadIdentificationQuizService.quizTitle;
    this._rootPositionTriadIdentificationQuizService.getAllRootPositionTriadIdentificationQuizQuestion();
    this.total = 0;
  }
}
