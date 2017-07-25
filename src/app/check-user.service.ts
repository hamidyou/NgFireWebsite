import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class CheckUserService {
  user: FirebaseObjectObservable<any>;
  constructor(public db: AngularFireDatabase) {
    this.user = this.db.object('users/all');
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

}
