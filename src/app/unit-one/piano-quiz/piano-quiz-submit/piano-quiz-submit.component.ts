import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthenticationService} from '../../../authentication.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-piano-quiz-submit',
  templateUrl: './piano-quiz-submit.component.html',
  styleUrls: ['./piano-quiz-submit.component.css']
})
export class PianoQuizSubmitComponent implements OnInit {
  private users: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase, public _authenticationService: AuthenticationService, private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

}
