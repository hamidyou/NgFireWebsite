import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../environments/environment';

import { UnitThreeComponent } from './unit-three/unit-three.component';
import { MajorKeySignaturesLessonComponent } from './major-key-signatures-lesson/major-key-signatures-lesson.component';
import { MinorKeySignaturesLessonComponent } from './minor-key-signatures-lesson/minor-key-signatures-lesson.component';
import {MajorKeySignaturesIdentificationQuizModule} from './major-key-signatures-identification-quiz/major-key-signatures-identification-quiz.module';
import {MajorKeySignaturesConstructionQuizModule} from './major-key-signatures-construction-quiz/major-key-signatures-construction-quiz.module';
import {MinorKeySignaturesIdentificationQuizModule} from './minor-key-signatures-identification-quiz/minor-key-signatures-identification-quiz.module';
import {MinorKeySignaturesConstructionQuizModule} from './minor-key-signatures-construction-quiz/minor-key-signatures-construction-quiz.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TimerModule,
    FormsModule,
    MajorKeySignaturesIdentificationQuizModule,
    MajorKeySignaturesConstructionQuizModule,
    MinorKeySignaturesIdentificationQuizModule,
    MinorKeySignaturesConstructionQuizModule
  ],
  declarations: [
    UnitThreeComponent,
    MajorKeySignaturesLessonComponent,
    MinorKeySignaturesLessonComponent
  ],
  exports: [
    UnitThreeComponent,
    MajorKeySignaturesLessonComponent,
    MinorKeySignaturesLessonComponent
  ],
  providers: []
})
export class UnitThreeModule { }
