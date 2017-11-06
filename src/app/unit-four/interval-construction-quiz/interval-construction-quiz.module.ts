import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';


import {IntervalConstructionQuizQuestionDisplayComponent} from './interval-construction-quiz-question-display/interval-construction-quiz-question-display.component';
import {IntervalConstructionQuizAnswerOptionsComponent} from './interval-construction-quiz-answer-options/interval-construction-quiz-answer-options.component';
import {IntervalConstructionQuizScoringComponent} from './interval-construction-quiz-scoring/interval-construction-quiz-scoring.component';
import {IntervalConstructionQuizService} from './interval-construction-quiz.service';
import {PerfectMajorIntervalConstructionQuizSubmitComponent} from './perfect-major-interval-construction-quiz-submit/perfect-major-interval-construction-quiz-submit.component';
import {IntervalConstructionQuizComponent} from './interval-construction-quiz.component';
import {IntervalConstructionQuizQuestionDisplayService} from './interval-construction-quiz-question-display/interval-construction-quiz-question-display.service';

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
    IntervalConstructionQuizQuestionDisplayComponent,
    IntervalConstructionQuizAnswerOptionsComponent,
    IntervalConstructionQuizScoringComponent,
    PerfectMajorIntervalConstructionQuizSubmitComponent,
    IntervalConstructionQuizComponent
  ],
  exports: [
    IntervalConstructionQuizQuestionDisplayComponent,
    IntervalConstructionQuizAnswerOptionsComponent,
    IntervalConstructionQuizScoringComponent,
    PerfectMajorIntervalConstructionQuizSubmitComponent,
    IntervalConstructionQuizComponent
  ],
  providers: [
    IntervalConstructionQuizService,
    IntervalConstructionQuizQuestionDisplayService
  ]
})
export class IntervalConstructionQuizModule {
}
