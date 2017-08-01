import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {HeaderComponent} from './header/header.component';
import {AuthenticationService} from './authentication.service';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {FormsModule} from '@angular/forms';
import {CheckUserService} from './check-user.service';
import {RegistrationService} from './registration.service';
import {UnitInfoService} from './home-page/unit-info.service';
import {HomePageComponent} from './home-page/home-page.component';
import {UnitOneComponent} from './unit-one/unit-one.component';
import {PianoLessonComponent} from './unit-one/piano-lesson/piano-lesson.component';
import {PianoLessonService} from './unit-one/piano-lesson/piano-lesson.service';
import {PianoQuizComponent} from './unit-one/piano-quiz/piano-quiz.component';
import {PianoQuizQuestionDisplayComponent} from './unit-one/piano-quiz/piano-quiz-question-display/piano-quiz-question-display.component';
import {PianoQuizScoringComponent} from './unit-one/piano-quiz/piano-quiz-scoring/piano-quiz-scoring.component';
import {PianoQuizAnswerOptionsComponent} from './unit-one/piano-quiz/piano-quiz-answer-options/piano-quiz-answer-options.component';
import {OctaveClassService} from './octave-class.service';
import {NoteNamesService} from './note-names.service';
import {PianoQuizStopwatchComponent} from './unit-one/piano-quiz/piano-quiz-stopwatch/piano-quiz-stopwatch.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRegistrationComponent,
    HomePageComponent,
    UnitOneComponent,
    PianoLessonComponent,
    PianoQuizComponent,
    PianoQuizQuestionDisplayComponent,
    PianoQuizScoringComponent,
    PianoQuizAnswerOptionsComponent,
    PianoQuizStopwatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AuthenticationService, CheckUserService, RegistrationService, UnitInfoService, PianoLessonService, OctaveClassService, NoteNamesService, PianoQuizComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
