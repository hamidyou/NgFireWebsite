import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';

import {MinorKeySignaturesIdentificationQuizComponent} from './minor-key-signatures-identification-quiz.component';
import {MinorKeySignaturesIdentificationQuizQuestionDisplayComponent} from './minor-key-signatures-identification-quiz-question-display/minor-key-signatures-identification-quiz-question-display.component';
import {MinorKeySignaturesIdentificationQuizScoringComponent} from './minor-key-signatures-identification-quiz-scoring/minor-key-signatures-identification-quiz-scoring.component';
import {MinorKeySignaturesIdentificationQuizAnswerOptionsComponent} from './minor-key-signatures-identification-quiz-answer-options/minor-key-signatures-identification-quiz-answer-options.component';
import {MinorKeySignaturesIdentificationQuizSubmitComponent} from './minor-key-signatures-identification-quiz-submit/minor-key-signatures-identification-quiz-submit.component';
import {MinorKeySignaturesIdentificationQuizService} from './minor-key-signatures-identification-quiz.service';
import {MinorKeySignaturesIdentificationQuizSubmitService} from './minor-key-signatures-identification-quiz-submit/minor-key-signatures-identification-quiz-submit.service';
import {MinorKeySignaturesIdentificationQuizQuestionDisplayService} from './minor-key-signatures-identification-quiz-question-display/minor-key-signatures-identification-quiz-question-display.service';

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
  declarations: [
    MinorKeySignaturesIdentificationQuizComponent,
    MinorKeySignaturesIdentificationQuizQuestionDisplayComponent,
    MinorKeySignaturesIdentificationQuizScoringComponent,
    MinorKeySignaturesIdentificationQuizAnswerOptionsComponent,
    MinorKeySignaturesIdentificationQuizSubmitComponent
  ],
  exports: [MinorKeySignaturesIdentificationQuizComponent],
  providers: [
    MinorKeySignaturesIdentificationQuizService,
    MinorKeySignaturesIdentificationQuizSubmitService,
    MinorKeySignaturesIdentificationQuizQuestionDisplayService
  ]
})
export class MinorKeySignaturesIdentificationQuizModule { }
