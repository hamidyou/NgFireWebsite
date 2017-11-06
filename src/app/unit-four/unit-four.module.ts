import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../environments/environment';

import {UnitFourComponent} from './unit-four/unit-four.component';
import {IntervalLessonOneComponent} from './interval-lesson-one/interval-lesson-one.component';
import {IntervalLessonTwoComponent} from './interval-lesson-two/interval-lesson-two.component';
import {IntervalLessonThreeComponent} from './interval-lesson-three/interval-lesson-three.component';
import {IntervalIdentificationQuizModule} from './interval-identification-quiz/interval-identification-quiz.module';
import {IntervalConstructionQuizModule} from './interval-construction-quiz/interval-construction-quiz.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TimerModule,
    FormsModule,
    IntervalIdentificationQuizModule,
    IntervalConstructionQuizModule
  ],
  declarations: [
    UnitFourComponent,
    IntervalLessonOneComponent,
    IntervalLessonTwoComponent,
    IntervalLessonThreeComponent,
  ],
  exports: [
    UnitFourComponent,
    IntervalLessonOneComponent,
    IntervalLessonTwoComponent,
    IntervalLessonThreeComponent
  ]
})
export class UnitFourModule { }
