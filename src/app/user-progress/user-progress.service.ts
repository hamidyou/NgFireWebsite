import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthenticationService} from '../authentication.service';

@Injectable()
export class UserProgressService {
  quizResults2: any = [];
  quiz: any;
  time: any;
  total: any;
  date: any;
  results: any;
  public user: FirebaseObjectObservable<any>;
  public userFile: any;
  public userResults: FirebaseObjectObservable<any>;
  public quizzes = ['PianoNoteIdentificationQuiz', 'NoteIdentificationQuiz', 'MajorScaleConstructionQuiz', 'MinorScalesConstructionQuiz', 'ScaleIdentificationQuiz', 'MajorKeySignaturesIdentificationQuiz', 'MajorKeySignaturesConstructionQuiz', 'MinorKeySignaturesIdentificationQuiz', 'MinorKeySignaturesConstructionQuiz'];
  public quizResults: any = [];
  public specificQuizResults: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase, public _authenticationService: AuthenticationService) {
    this.user = db.object('users/all', {preserveSnapshot: true});
    this.user.subscribe(data => {
      this.userFile = data.child(this._authenticationService.userId).val();
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

  getSpecificQuizResults(event): void {
    const target = event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;

    console.log(value);

    this.specificQuizResults = this.db.list('/quizzes/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname + '/' + value);
    this.specificQuizResults.subscribe(results => {
      console.log(results);
      this.quizResults2 = results;
      console.log(this.quizResults2[0]);
    });
  }
}
