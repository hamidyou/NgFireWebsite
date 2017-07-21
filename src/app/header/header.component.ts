import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {CheckUserService} from '../check-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService, CheckUserService]
})

export class HeaderComponent {
  users: FirebaseListObservable<any>;
  registered = false;
  constructor (public _AuthenticationService: AuthenticationService, public db: AngularFireDatabase, public _checkUser: CheckUserService) {
    this.users = db.list('users/all');
  }

  login(): void {
    this._AuthenticationService.login();
  }

  logout(): void {
    this._AuthenticationService.logout();
  }

  checkUser(uid): void {
    this._checkUser.checkUser(uid);
    console.log(uid);
    this.registered = true;
  }
}
