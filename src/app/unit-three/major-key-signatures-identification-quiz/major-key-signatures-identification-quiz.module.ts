import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';

import {MajorKeySignaturesIdentificationQuizComponent} from './major-key-signatures-identification-quiz.component';
import {MajorKeySignaturesIdentificationQuizQuestionDisplayComponent} from './major-key-signatures-identification-quiz-question-display/major-key-signatures-identification-quiz-question-display.component';
import {MajorKeySignaturesIdentificationQuizScoringComponent} from './major-key-signatures-identification-quiz-scoring/major-key-signatures-identification-quiz-scoring.component';

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
    MajorKeySignaturesIdentificationQuizComponent,
    MajorKeySignaturesIdentificationQuizQuestionDisplayComponent,
    MajorKeySignaturesIdentificationQuizScoringComponent
  ],
  exports: [MajorKeySignaturesIdentificationQuizComponent]
})
export class MajorKeySignaturesIdentificationQuizModule { }
