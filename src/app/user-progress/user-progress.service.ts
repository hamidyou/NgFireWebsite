import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthenticationService} from '../authentication.service';

@Injectable()
export class UserProgressService {
  quiz: any;
  time: any;
  total: any;
  date: any;
  results: any;
  public user: FirebaseObjectObservable<any>;
  public userFile: any;
  public userResults: FirebaseObjectObservable<any>;
  public quizzes = ['PianoNoteIdentificationQuiz', 'NoteIdentificationQuiz'];
  public quizResults: any = [];
  public registered: boolean = this._authenticationService.registered;

  constructor(public db: AngularFireDatabase, public _authenticationService: AuthenticationService) {
    this.user = db.object('users/all', {preserveSnapshot: true});
    this.user.subscribe(data => {
        this.userFile = data.child(this._authenticationService.userId).val();
        this.registered = true;
        console.log(this._authenticationService.registered);
        console.log(this.registered);
    });
  }

  getUserProgress(): void {
    for (const quiz of this.quizzes) {
      this.userResults = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname + '/quizScores/' + quiz);
      this.userResults.subscribe(results => {
        this.results = results;
        this.quiz = quiz;
        this.date = results.dateTimeSubmitted;
        this.total = results.total;
        this.time = results.timeElapsed;
        this.quizResults.push({
          quiz: this.quiz,
          date: this.date,
          total: this.total,
          time: this.time
        });
      });
    }
  }
}
