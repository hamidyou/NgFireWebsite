import { Component } from '@angular/core';

import { RegisteredUser } from '../registered-user';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthenticationService} from '../authentication.service';
import {detectBufferEncoding} from 'tslint/lib/utils';
import {timeout} from 'rxjs/operator/timeout';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  providers: [AuthenticationService]
})
export class UserRegistrationComponent {
  schools = ['CFEVS'];

  programs = ['AP Music Theory', '7th Grade Choir', '8th Grade Choir', 'Womens Choir', 'Mixed Choir', '7th Grade Orchestra', '8th Grade Orchestra', 'HS Orchestra', '7th Grade Band', '8th Grade Band', 'HS Band'];

  gradYears = [2018, 2019, 2020, 2021, 2022, 2023];

  currentUser: FirebaseObjectObservable<any>;

  constructor(public db: AngularFireDatabase, public _AuthenticationService: AuthenticationService) {
    this.currentUser = db.object('users/');
  }

  register(firstName, lastName, googleId, school, program, gradYear) {
    this.db.object('users/' + school + '/' + program + '/' + lastName + firstName).set({
      firstname: firstName,
      lastname: lastName,
      googleId: googleId,
      school: school,
      program: program,
      gradYear: gradYear
    });
    this.db.object('users/' + school + '/' + gradYear + '/' + lastName + firstName).set({
      firstname: firstName,
      lastname: lastName,
      googleId: googleId,
      school: school,
      program: program,
      gradYear: gradYear
    });
  }
}
