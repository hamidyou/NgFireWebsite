import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService]
})

export class HeaderComponent {
  users: FirebaseListObservable<any>;
  constructor (public _AuthenticationService: AuthenticationService, public db: AngularFireDatabase) {
    this.users = db.list('users/all');
  }

  login() {
    this._AuthenticationService.login();
  }

  logout() {
    this._AuthenticationService.logout();
  }
}
