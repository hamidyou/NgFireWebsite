import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {RootPositionTriadIdentificationQuizComponent} from './root-position-triad-identification-quiz.component';
import {RootPositionTriadIdentificationQuizQuestionDisplayComponent} from './root-position-triad-identification-quiz-question-display/root-position-triad-identification-quiz-question-display.component';
import {RootPositionTriadIdentificationQuizService} from './root-position-triad-identification-quiz.service';
import {RootPositionTriadIdentificationQuizQuestionDisplayService} from './root-position-triad-identification-quiz-question-display/root-position-triad-identification-quiz-question-display.service';
import {RootPositionTriadIdentificationQuizAnswerOptionsComponent} from './root-position-triad-identification-quiz-answer-options/root-position-triad-identification-quiz-answer-options.component';
import {RootPositionTriadIdentificationQuizScoringComponent} from './root-position-triad-identification-quiz-scoring/root-position-triad-identification-quiz-scoring.component';


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
    RootPositionTriadIdentificationQuizComponent,
    RootPositionTriadIdentificationQuizQuestionDisplayComponent,
    RootPositionTriadIdentificationQuizAnswerOptionsComponent,
    RootPositionTriadIdentificationQuizScoringComponent
  ],
  exports: [
    RootPositionTriadIdentificationQuizComponent,
    RootPositionTriadIdentificationQuizQuestionDisplayComponent
  ],
  providers: [
    RootPositionTriadIdentificationQuizService,
    RootPositionTriadIdentificationQuizQuestionDisplayService
  ]
})
export class RootPositionTriadIdentificationQuizModule {
}
