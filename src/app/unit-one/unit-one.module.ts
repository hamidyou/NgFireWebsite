import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UnitOneComponent} from './unit-one.component';
import {PianoLessonComponent} from './piano-lesson/piano-lesson.component';
import {PianoQuizComponent} from './piano-quiz/piano-quiz.component';
import {PianoQuizQuestionDisplayComponent} from './piano-quiz/piano-quiz-question-display/piano-quiz-question-display.component';
import {PianoQuizScoringComponent} from './piano-quiz/piano-quiz-scoring/piano-quiz-scoring.component';
import {PianoQuizAnswerOptionsComponent} from './piano-quiz/piano-quiz-answer-options/piano-quiz-answer-options.component';
import {PianoQuizSubmitComponent} from './piano-quiz/piano-quiz-submit/piano-quiz-submit.component';
import {AccidentalsLessonComponent} from './accidentals-lesson/accidentals-lesson.component';
import {NoteQuizSubmitComponent} from './note-quiz/note-quiz-submit/note-quiz-submit.component';
import {NoteQuizAnswerOptionsComponent} from './note-quiz/note-quiz-answer-options/note-quiz-answer-options.component';
import {NoteQuizQuestionDisplayComponent} from './note-quiz/note-quiz-question-display/note-quiz-question-display.component';
import {NoteQuizScoringComponent} from './note-quiz/note-quiz-scoring/note-quiz-scoring.component';
import {NoteQuizComponent} from './note-quiz/note-quiz.component';
import {ClefsLessonComponent} from './clefs-lesson/clefs-lesson.component';
import {AppRoutingModule} from '../app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../../environments/environment';
import {TimerModule} from '../timer/timer.module';
import {FormsModule} from '@angular/forms';

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
    UnitOneComponent,
    PianoLessonComponent,
    PianoQuizComponent,
    PianoQuizQuestionDisplayComponent,
    PianoQuizScoringComponent,
    PianoQuizAnswerOptionsComponent,
    PianoQuizSubmitComponent,
    ClefsLessonComponent,
    NoteQuizComponent,
    NoteQuizScoringComponent,
    NoteQuizQuestionDisplayComponent,
    NoteQuizAnswerOptionsComponent,
    NoteQuizSubmitComponent,
    AccidentalsLessonComponent,
  ],
  exports: [
    UnitOneComponent,
    PianoLessonComponent,
    PianoQuizComponent,
    PianoQuizQuestionDisplayComponent,
    PianoQuizScoringComponent,
    PianoQuizAnswerOptionsComponent,
    PianoQuizSubmitComponent,
    ClefsLessonComponent,
    NoteQuizComponent,
    NoteQuizScoringComponent,
    NoteQuizQuestionDisplayComponent,
    NoteQuizAnswerOptionsComponent,
    NoteQuizSubmitComponent,
    AccidentalsLessonComponent
  ]
})
export class UnitOneModule { }
