import {Component, OnInit} from '@angular/core';
import {PianoQuizQuestionDisplayComponent} from './piano-quiz-question-display/piano-quiz-question-display.component';
import {PianoQuizScoringComponent} from './piano-quiz-scoring/piano-quiz-scoring.component';
import {PianoQuizAnswerOptionsComponent} from './piano-quiz-answer-options/piano-quiz-answer-options.component';
import {PianoQuizService} from './piano-quiz.service';
import {PianoQuizQuestionService} from './piano-quiz-question-display/piano-quiz-question.service';
import {PianoQuizSubmitService} from './piano-quiz-submit/piano-quiz-submit.service';
import {TimerComponent} from '../../timer/timer.component';

@Component({
  selector: 'app-piano-quiz',
  templateUrl: './piano-quiz.component.html',
  styleUrls: ['./piano-quiz.component.css'],
  entryComponents: [PianoQuizQuestionDisplayComponent, PianoQuizScoringComponent, PianoQuizAnswerOptionsComponent, TimerComponent],
  providers: [PianoQuizService, PianoQuizQuestionService, PianoQuizSubmitService]
})
export class PianoQuizComponent implements OnInit {
  total: number = this._pianoQuizService.total;

  constructor(private _pianoQuizService: PianoQuizService) {}

  startQuiz(): void {
    this._pianoQuizService.setInitialPianoQuizVariables();
    this._pianoQuizService.getPianoQuizQuestion();
    this._pianoQuizService.getAnswerOptions();
    this.total = 0;
  }

  reset(): void {
    this.startQuiz();
  }

  ngOnInit(): void {
    this.startQuiz();
  }
}
