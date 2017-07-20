import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthenticationService]
})

export class HeaderComponent {

  constructor (public _AuthenticationService: AuthenticationService, public db: AngularFireDatabase) {}

  login() {
    this._AuthenticationService.login();
  }

  logout() {
    this._AuthenticationService.logout();
  }
}
