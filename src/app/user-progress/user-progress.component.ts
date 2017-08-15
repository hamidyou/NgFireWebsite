import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserProgressService} from './user-progress.service';
import {AuthenticationService} from '../authentication.service';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.css'],
  providers: [UserProgressService]
})
export class UserProgressComponent implements OnInit {
  userInfo: any;
  public quizResults2: any;
  public quizResults: any;
  public user: FirebaseObjectObservable<any>;
  showProgress = false;

  constructor(public _userProgressService: UserProgressService, public _authenticationService: AuthenticationService, private db: AngularFireDatabase) {
    this.user = db.object('users/all', {preserveSnapshot: true});
    this.user.subscribe(data => {
      this.userInfo = data.child(this._authenticationService.userId).val();
    });
  }

  getUserProgress(): void {
    this._userProgressService.getUserProgress();
    this._userProgressService.getSpecificQuizResults();
    this.quizResults = this._userProgressService.quizResults;
    this.quizResults2 = this._userProgressService.quizResults2;
    this.showProgress = true;
  }

  hideUserProgress(): void {
    this.showProgress = false;
    this.quizResults = '';
  }

  getSpecificQuizResults(): any {
    console.log('component = ' + this.quizResults2);
  }

  ngOnInit(): void {
    this.getUserProgress();
  }
}
