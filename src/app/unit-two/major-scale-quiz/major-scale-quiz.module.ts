import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';

import {MajorScaleQuizComponent} from './major-scale-quiz.component';
import {MajorScaleQuizService} from './major-scale-quiz.service';
import {MajorScaleQuizQuestionDisplayComponent} from './major-scale-quiz-question-display/major-scale-quiz-question-display.component';
import {MajorScaleQuizQuestionDisplayService} from './major-scale-quiz-question-display/major-scale-quiz-question-display.service';
import {MajorScaleQuizCheckAnswersService} from './major-scale-quiz-check-answers.service';


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
  declarations: [MajorScaleQuizComponent, MajorScaleQuizQuestionDisplayComponent],
  exports: [MajorScaleQuizComponent],
  providers: [MajorScaleQuizService, MajorScaleQuizQuestionDisplayService, MajorScaleQuizCheckAnswersService]
})
export class MajorScaleQuizModule { }
