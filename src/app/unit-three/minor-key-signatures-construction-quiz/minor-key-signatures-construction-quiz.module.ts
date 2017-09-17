import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AppRoutingModule} from '../../app-routing.module';
import {environment} from '../../../environments/environment';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';

import { MinorKeySignaturesConstructionQuizAnswerOptionsComponent } from './minor-key-signatures-construction-quiz-answer-options/minor-key-signatures-construction-quiz-answer-options.component';
import { MinorKeySignaturesConstructionQuizSubmitComponent } from './minor-key-signatures-construction-quiz-submit/minor-key-signatures-construction-quiz-submit.component';
import {MinorKeySignaturesConstructionQuizScoringComponent} from './minor-key-signatures-construction-quiz-scoring/minor-key-signatures-construction-quiz-scoring.component';
import {MinorKeySignaturesConstructionQuizComponent} from './minor-key-signatures-construction-quiz.component';
import {MinorKeySignaturesConstructionQuizService} from './minor-key-signatures-construction-quiz.service';
import {MinorKeySignaturesConstructionQuizQuestionDisplayService} from './minor-key-signatures-construction-quiz-question-display/minor-key-signatures-construction-quiz-question-display.service';
import {MinorKeySignaturesConstructionQuizQuestionDisplayComponent} from './minor-key-signatures-construction-quiz-question-display/minor-key-signatures-construction-quiz-question-display.component';
import {MinorKeySignaturesConstructionQuizSubmitService} from './minor-key-signatures-construction-quiz-submit/minor-key-signatures-construction-quiz-submit.service';

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
    MinorKeySignaturesConstructionQuizAnswerOptionsComponent,
    MinorKeySignaturesConstructionQuizQuestionDisplayComponent,
    MinorKeySignaturesConstructionQuizScoringComponent,
    MinorKeySignaturesConstructionQuizSubmitComponent,
    MinorKeySignaturesConstructionQuizComponent
  ],
  exports: [MinorKeySignaturesConstructionQuizComponent],
  providers: [
    MinorKeySignaturesConstructionQuizService,
    MinorKeySignaturesConstructionQuizQuestionDisplayService,
    MinorKeySignaturesConstructionQuizSubmitService
  ]
})
export class MinorKeySignaturesConstructionQuizModule { }
