import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AppRoutingModule} from '../../app-routing.module';
import {environment} from '../../../environments/environment';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';

import { MajorKeySignaturesConstructionQuizAnswerOptionsComponent } from './major-key-signatures-construction-quiz-answer-options/major-key-signatures-construction-quiz-answer-options.component';
import { MajorKeySignaturesConstructionQuizSubmitComponent } from './major-key-signatures-construction-quiz-submit/major-key-signatures-construction-quiz-submit.component';
import {MajorKeySignaturesConstructionQuizScoringComponent} from './major-key-signatures-construction-quiz-scoring/major-key-signatures-construction-quiz-scoring.component';
import {MajorKeySignaturesConstructionQuizComponent} from './major-key-signatures-construction-quiz.component';
import {MajorKeySignaturesConstructionQuizService} from './major-key-signatures-construction-quiz.service';
import {MajorKeySignaturesConstructionQuizQuestionDisplayService} from './major-key-signatures-construction-quiz-question-display/major-key-signatures-construction-quiz-question-display.service';
import {MajorKeySignaturesConstructionQuizQuestionDisplayComponent} from './major-key-signatures-construction-quiz-question-display/major-key-signatures-construction-quiz-question-display.component';

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
    MajorKeySignaturesConstructionQuizAnswerOptionsComponent,
    MajorKeySignaturesConstructionQuizQuestionDisplayComponent,
    MajorKeySignaturesConstructionQuizScoringComponent,
    // MajorKeySignaturesConstructionQuizSubmitComponent,
    MajorKeySignaturesConstructionQuizComponent
  ],
  exports: [MajorKeySignaturesConstructionQuizComponent],
  providers: [
    MajorKeySignaturesConstructionQuizService,
    MajorKeySignaturesConstructionQuizQuestionDisplayService
  ]
})
export class MajorKeySignaturesConstructionQuizModule { }
