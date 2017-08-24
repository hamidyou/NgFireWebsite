import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {TimerModule} from '../../timer/timer.module';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../environments/environment';

import { MinorScalesQuizComponent } from './minor-scales-quiz.component';
import {MinorScalesQuizService} from './minor-scales-quiz.service';
import {MinorScalesQuizQuestionDisplayComponent} from './minor-scales-quiz-question-display/minor-scales-quiz-question-display.component';
import {MinorScaleQuizQuestionDisplayService} from './minor-scales-quiz-question-display/minor-scale-quiz-question-display.service';
import {MinorScalesQuizScoringComponent} from './minor-scales-quiz-scoring/minor-scales-quiz-scoring.component';
import {MinorScalesQuizAnswerOptionsComponent} from './minor-scales-quiz-answer-options/minor-scales-quiz-answer-options.component';
import {MinorScalesQuizSubmitComponent} from './minor-scales-quiz-submit/minor-scales-quiz-submit.component';
import {MinorScalesQuizSubmitService} from './minor-scales-quiz-submit/minor-scales-quiz-submit.service';

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
  declarations: [MinorScalesQuizComponent, MinorScalesQuizQuestionDisplayComponent, MinorScalesQuizScoringComponent, MinorScalesQuizAnswerOptionsComponent, MinorScalesQuizSubmitComponent],
  exports: [MinorScalesQuizComponent],
  providers: [MinorScalesQuizService, MinorScaleQuizQuestionDisplayService, MinorScalesQuizSubmitService]
})
export class MinorScalesQuizModule { }
