import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AuthenticationService} from '../authentication.service';
import {CheckUserService} from '../check-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService, CheckUserService]
})

export class HeaderComponent {
  users: FirebaseListObservable<any>;
  userId: any;

  constructor(public _AuthenticationService: AuthenticationService, public db: AngularFireDatabase, public _checkUser: CheckUserService) {
    this.users = db.list('users/all');
    this.userId = this._AuthenticationService.userId;
  }

  login(): void {
    this._AuthenticationService.login();
    console.log(this.userId);
  }

  logout(): void {
    this._AuthenticationService.logout();
  }

  checkUser(uid): void {
    this._AuthenticationService.checkUserRegistration(uid);
  }
}
