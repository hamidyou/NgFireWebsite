import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService]
})

export class HeaderComponent {
  users: FirebaseListObservable<any>;
  userId: any;

  constructor(public _AuthenticationService: AuthenticationService, public db: AngularFireDatabase) {
    this.users = db.list('users/all');
    this.userId = this._AuthenticationService.userId;
  }

  login(): void {
    this._AuthenticationService.login();
    console.log(this.userId);
    console.log(this._AuthenticationService.userId);
  }

  logout(): void {
    this._AuthenticationService.logout();
  }

  checkUser(uid): void {
    this._AuthenticationService.checkUserRegistration(uid);
  }
}
