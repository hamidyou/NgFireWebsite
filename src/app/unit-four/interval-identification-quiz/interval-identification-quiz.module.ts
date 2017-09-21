import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntervalIdentificationQuizzesQuestionDisplayComponent} from './interval-identification-quizzes-question-display/interval-identification-quizzes-question-display.component';
import {IntervalIdentificationQuizzesScoringComponent} from './interval-identification-quizzes-scoring/interval-identification-quizzes-scoring.component';
import {IntervalIdentificationQuizzesAnswerOptionsComponent} from './interval-identification-quizzes-answer-options/interval-identification-quizzes-answer-options.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IntervalIdentificationQuizzesQuestionDisplayComponent,
    IntervalIdentificationQuizzesScoringComponent,
    IntervalIdentificationQuizzesAnswerOptionsComponent
  ]
})
export class IntervalIdentificationQuizModule {
}
