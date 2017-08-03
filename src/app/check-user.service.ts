import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class CheckUserService {
  user: FirebaseObjectObservable<any>;

  constructor(public db: AngularFireDatabase) {
    this.user = this.db.object('users/all');
  }
}
