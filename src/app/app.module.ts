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
import {OctaveClassService} from './octave-class.service';
import {NoteNamesService} from './note-names.service';
import { UserProgressComponent } from './user-progress/user-progress.component';
import {ClefsService} from './clefs.service';
import {UserProgressService} from './user-progress/user-progress.service';
import {UnitOneModule} from './unit-one/unit-one.module';
import {TimerModule} from './timer/timer.module';
import {UnitTwoModule} from './unit-two/unit-two.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRegistrationComponent,
    HomePageComponent,
    UserProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    TimerModule,
    UnitOneModule,
    UnitTwoModule
  ],
  providers: [AuthenticationService, CheckUserService, RegistrationService, UnitInfoService, OctaveClassService, NoteNamesService, ClefsService, UserProgressService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
