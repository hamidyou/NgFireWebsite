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
    UnitTwoComponent,
    MajorScaleLessonComponent
  ],
  exports: [
    UnitTwoComponent,
    MajorScaleLessonComponent
  ]
})
export class UnitTwoModule { }