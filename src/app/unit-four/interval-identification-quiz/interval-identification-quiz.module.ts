import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';

import {IntervalIdentificationQuizzesQuestionDisplayComponent} from './interval-identification-quizzes-question-display/interval-identification-quizzes-question-display.component';
import {IntervalIdentificationQuizzesScoringComponent} from './interval-identification-quizzes-scoring/interval-identification-quizzes-scoring.component';
import {IntervalIdentificationQuizzesAnswerOptionsComponent} from './interval-identification-quizzes-answer-options/interval-identification-quizzes-answer-options.component';
import {IntervalIdentificationQuizComponent} from './interval-identification-quiz.component';
import {IntervalIdentificationQuizzesService} from './interval-identification-quizzes.service';
import {IntervalIdentificationQuizzesQuestionDisplayService} from './interval-identification-quizzes-question-display/interval-identification-quizzes-question-display.service';
import {PerfectMajorIntervalIdentificationQuizComponent} from './perfect-major-interval-identification-quiz/perfect-major-interval-identification-quiz.component';
import {PerfectMajorIntervalIdentificationQuizSubmitService} from './perfect-major-interval-identification-quiz/perfect-major-interval-identification-quiz-submit/perfect-major-interval-identification-quiz-submit.service';
import {PerfectMajorMinorIntervalIdentificationQuizComponent} from './perfect-major-minor-interval-identification-quiz/perfect-major-minor-interval-identification-quiz.component';
import {PerfectMajorMinorIntervalIdentificationQuizSubmitService} from './perfect-major-minor-interval-identification-quiz/perfect-major-minor-interval-identification-quiz-submit/perfect-major-minor-interval-identification-quiz-submit.service';
import {PerfectMajorIntervalIdentificationQuizSubmitComponent} from './perfect-major-interval-identification-quiz/perfect-major-interval-identification-quiz-submit/perfect-major-interval-identification-quiz-submit.component';
import {PerfectMajorMinorIntervalIdentificationQuizSubmitComponent} from './perfect-major-minor-interval-identification-quiz/perfect-major-minor-interval-identification-quiz-submit/perfect-major-minor-interval-identification-quiz-submit.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TimerModule,
    FormsModule,
  ],
  declarations: [
    IntervalIdentificationQuizzesQuestionDisplayComponent,
    IntervalIdentificationQuizzesScoringComponent,
    IntervalIdentificationQuizzesAnswerOptionsComponent,
    IntervalIdentificationQuizComponent,
    PerfectMajorIntervalIdentificationQuizComponent,
    PerfectMajorMinorIntervalIdentificationQuizComponent,
    PerfectMajorIntervalIdentificationQuizSubmitComponent,
    PerfectMajorMinorIntervalIdentificationQuizSubmitComponent
  ],
  exports: [
    IntervalIdentificationQuizzesQuestionDisplayComponent,
    IntervalIdentificationQuizzesScoringComponent,
    IntervalIdentificationQuizzesAnswerOptionsComponent,
    IntervalIdentificationQuizComponent,
    PerfectMajorIntervalIdentificationQuizComponent,
    PerfectMajorIntervalIdentificationQuizSubmitComponent,
    PerfectMajorMinorIntervalIdentificationQuizComponent,
    PerfectMajorMinorIntervalIdentificationQuizSubmitComponent
  ],
  providers: [
    IntervalIdentificationQuizzesService,
    IntervalIdentificationQuizzesQuestionDisplayService,
    PerfectMajorIntervalIdentificationQuizSubmitService,
    PerfectMajorMinorIntervalIdentificationQuizSubmitService
  ]
})
export class IntervalIdentificationQuizModule {
}
