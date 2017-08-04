import { Component } from '@angular/core';
import {PianoQuizQuestionDisplayComponent} from './piano-quiz-question-display/piano-quiz-question-display.component';
import {PianoQuizScoringComponent} from './piano-quiz-scoring/piano-quiz-scoring.component';
import {PianoQuizAnswerOptionsComponent} from './piano-quiz-answer-options/piano-quiz-answer-options.component';
import {PianoQuizService} from './piano-quiz.service';
import {PianoQuizQuestionService} from './piano-quiz-question-display/piano-quiz-question.service';
import {PianoQuizAnswerOptionsService} from './piano-quiz-answer-options/piano-quiz-answer-options.service';
import {PianoQuizSubmitService} from './piano-quiz-submit/piano-quiz-submit.service';

@Component({
  selector: 'app-piano-quiz',
  templateUrl: './piano-quiz.component.html',
  styleUrls: ['./piano-quiz.component.css'],
  entryComponents: [PianoQuizQuestionDisplayComponent, PianoQuizScoringComponent, PianoQuizAnswerOptionsComponent],
  providers: [PianoQuizService, PianoQuizQuestionService, PianoQuizAnswerOptionsService, PianoQuizSubmitService]
})
export class PianoQuizComponent {
  total: number = this._pianoQuizService.total;
  inProgress: boolean = this._pianoQuizService.inProgress;

  constructor(private _pianoQuizService: PianoQuizService) {}

  startQuiz(): void {
    this._pianoQuizService.setInitialPianoQuizVariables();
    this._pianoQuizService.getPianoQuizQuestion();
    this._pianoQuizService.getAnswerOptions();
    this.total = 0;
    this.inProgress = true;
  }

}
