import {Component} from '@angular/core';
import {IntervalConstructionQuizService} from '../interval-construction-quiz.service';
import {NoteNamesService} from '../../../note-names.service';

@Component({
  selector: 'app-interval-construction-quiz-answer-options',
  templateUrl: './interval-construction-quiz-answer-options.component.html',
  styleUrls: ['./interval-construction-quiz-answer-options.component.css']
})
export class IntervalConstructionQuizAnswerOptionsComponent {
  public hideAnswer: boolean;
  public noteNames: string[] = this._noteNamesService.getNoteNamesOptions().all;

  constructor(public _intervalConstructionQuizService: IntervalConstructionQuizService,
              public _noteNamesService: NoteNamesService) {
    this.hideAnswer = this._intervalConstructionQuizService.hideAnswer;
  }

  checkAnswer(event): void {
    this._intervalConstructionQuizService.checkAnswer(event);
  }

}
