import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';

import {ScaleIdentificationQuizComponent} from './scale-identification-quiz.component';
import {ScaleIdentificationAnswerOptionsComponent} from './scale-identification-answer-options/scale-identification-answer-options.component';
import {ScaleIdentificationQuizScoringComponent} from './scale-identification-quiz-scoring/scale-identification-quiz-scoring.component';
import {ScaleIdentificationQuizQuestionDisplayComponent} from './scale-identification-quiz-question-display/scale-identification-quiz-question-display.component';
import {ScaleIdentificationQuizSubmitComponent} from './scale-identification-quiz-submit/scale-identification-quiz-submit.component';
import {ScaleIdentificationQuizQuestionDisplayService} from './scale-identification-quiz-question-display/scale-identification-quiz-question-display.service';
import {ScaleIdentificationQuizService} from './scale-identification-quiz.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TimerModule,
    FormsModule
  ],
  declarations: [ScaleIdentificationQuizComponent, ScaleIdentificationAnswerOptionsComponent, ScaleIdentificationQuizScoringComponent, ScaleIdentificationQuizQuestionDisplayComponent, ScaleIdentificationQuizSubmitComponent],
  exports: [ScaleIdentificationQuizComponent, ScaleIdentificationAnswerOptionsComponent, ScaleIdentificationQuizScoringComponent, ScaleIdentificationQuizQuestionDisplayComponent, ScaleIdentificationQuizSubmitComponent],
  providers: [ScaleIdentificationQuizQuestionDisplayService, ScaleIdentificationQuizService]
})
export class ScaleIdentificationQuizModule { }
