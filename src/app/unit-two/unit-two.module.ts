import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../environments/environment';

import {UnitTwoComponent} from './unit-two/unit-two.component';
import {MajorScaleLessonComponent} from './major-scale-lesson/major-scale-lesson.component';
import {MajorScaleQuizModule} from './major-scale-quiz/major-scale-quiz.module';
import { MinorScaleLessonComponent } from './minor-scale-lesson/minor-scale-lesson.component';
import {MinorScalesQuizModule} from './minor-scales-quiz/minor-scales-quiz.module';
import { ScaleDegreesLessonComponent } from './scale-degrees-lesson/scale-degrees-lesson.component';
import {ScaleIdentificationQuizModule} from './scale-identification-quiz/scale-identification-quiz.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TimerModule,
    FormsModule,
    MajorScaleQuizModule,
    MinorScalesQuizModule,
    ScaleIdentificationQuizModule
  ],
  declarations: [
    UnitTwoComponent,
    MajorScaleLessonComponent,
    MinorScaleLessonComponent,
    ScaleDegreesLessonComponent
  ],
  exports: [
    UnitTwoComponent,
    MajorScaleLessonComponent,
    MinorScaleLessonComponent,
    ScaleDegreesLessonComponent
  ]
})
export class UnitTwoModule { }
