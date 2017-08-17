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
    this.quizResults = this._userProgressService.quizResults;
    this.showProgress = true;
  }

  hideUserProgress(): void {
    this._userProgressService.quizResults = [];
    this.showProgress = false;
  }

  getSpecificQuizResults(event): any {
    this._userProgressService.getSpecificQuizResults(event);
    console.log('component = ' + this.quizResults2);
  }

  ngOnInit(): void {
    this.getUserProgress();
  }
}
