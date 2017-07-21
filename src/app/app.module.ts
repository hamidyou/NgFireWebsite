import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {HeaderComponent} from './header/header.component';
import {AuthenticationService} from './authentication.service';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {FormsModule} from '@angular/forms';
import {CheckUserService} from './check-user.service';
import {RegistrationService} from './registration.service';
import {UnitInfoService} from './home-page/unit-info.service';
import {HomePageComponent} from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRegistrationComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AuthenticationService, CheckUserService, RegistrationService, UnitInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
