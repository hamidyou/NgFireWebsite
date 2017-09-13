import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {CheckUserService} from './check-user.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  public userSubscribe: any;
  public userId: any;
  public registered: any;

  constructor(private afAuth: AngularFireAuth, public db: AngularFireDatabase, private _checkUserService: CheckUserService) {
    this.user = afAuth.authState;
    this.userSubscribe = this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.userId = auth.uid;
        this.checkUserRegistration(this.userId);
      } else {
        console.log('user not logged in');
      }
    });
  }

  checkUserRegistration(uid): any {
    const user = this.db.object('users/all/' + uid);
    user.subscribe(data => {
      if (data.$exists()) {
        document.getElementById('userRegistrationForm').style.display = 'none';
        this.registered = true;
      } else {
        this.registered = false;
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
