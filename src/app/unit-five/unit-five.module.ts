import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../environments/environment';

import {UnitFiveComponent} from './unit-five/unit-five.component';
import {RootPositionTriadsLessonComponent} from './root-position-triads-lesson/root-position-triads-lesson.component';
import {RootPositionTriadsLessonService} from './root-position-triads-lesson/root-position-triads-lesson.service';
import {RootPositionTriadIdentificationQuizModule} from './root-position-triad-identification-quiz/root-position-triad-identification-quiz.module';
import {RootPositionTriadIdentificationQuizComponent} from './root-position-triad-identification-quiz/root-position-triad-identification-quiz.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TimerModule,
    FormsModule,
    RootPositionTriadIdentificationQuizModule
  ],
  declarations: [
    UnitFiveComponent,
    RootPositionTriadsLessonComponent
  ],
  exports: [
    UnitFiveComponent,
    RootPositionTriadsLessonComponent,
  ],
  providers: [
    RootPositionTriadsLessonService,
    RootPositionTriadIdentificationQuizComponent
  ]
})
export class UnitFiveModule {
}
