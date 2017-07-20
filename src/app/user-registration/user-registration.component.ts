import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthenticationService} from '../authentication.service';

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

  missingValues = false;

  userExists = false;

  users: FirebaseObjectObservable<any>;

  constructor(public db: AngularFireDatabase, public _AuthenticationService: AuthenticationService) {
    this.users = db.object('users/all');
  }

  checkUser(uid) {
    const user = this.db.object('users/all/' + uid);
    user.subscribe(data => {
      if (data.$exists()) {
        document.getElementById('userRegistrationForm').style.display = 'none';
        alert('User already registered.');
      }
    });
  }

  register(firstName, lastName, googleId, uid, school, program, gradYear) {
    if (!firstName || !lastName || !school || !program || !gradYear) {
      this.missingValues = true;
    } else {
      this.db.object('users/' + school + '/' + program + '/' + lastName + firstName).set({
        firstname: firstName,
        lastname: lastName,
        googleId: googleId,
        school: school,
        program: program,
        gradYear: gradYear,
        uid: uid
      });
      this.db.object('users/' + school + '/' + gradYear + '/' + lastName + firstName).set({
        firstname: firstName,
        lastname: lastName,
        googleId: googleId,
        school: school,
        program: program,
        gradYear: gradYear,
        uid: uid
      });
      this.db.object('users/all/' + uid).set({
        firstname: firstName,
        lastname: lastName,
        googleId: googleId,
        school: school,
        program: program,
        gradYear: gradYear,
        uid: uid
    });
      document.getElementById('userRegistrationForm').style.display = 'none';
    }
  }
}

