import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import 'rxjs/add/operator/take';
import {AuthenticationService} from '../../../authentication.service';
import {PianoQuizService} from '../piano-quiz.service';

@Injectable()
export class PianoQuizSubmitService {
  private user: FirebaseObjectObservable<any>;
  private currentUser: any;
  private userFile: any;
  public timeElapsed: any;
  public attemptDate: any;
  public verify: string;
  public passed: boolean;

  constructor(private db: AngularFireDatabase, public _authenticationService: AuthenticationService, public _pianoQuizService: PianoQuizService) {
    this.user = db.object('users/all', {preserveSnapshot: true});
    this.user.subscribe(data => {
      this.userFile = data.child(this._authenticationService.userId).val();
    });
    this.passed = this._pianoQuizService.total >= .9;
  }

  update(): void {
    this.currentUser.update({
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._pianoQuizService.total * 100).toFixed(0),
      notesCorrect: this._pianoQuizService.notesCorrect,
      notesIncorrect: this._pianoQuizService.notesIncorrect,
      notesAttempted: this._pianoQuizService.notesAttempted,
      octavesCorrect: this._pianoQuizService.octavesCorrect,
      octavesIncorrect: this._pianoQuizService.octavesIncorrect,
      octavesAttempted: this._pianoQuizService.octavesAttempted
    });
  }

  quizSet(): void {
    this.db.object('quizzes/Piano-Note-Identification-Quiz/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname).set({
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._pianoQuizService.total * 100).toFixed(0),
      notesCorrect: this._pianoQuizService.notesCorrect,
      notesIncorrect: this._pianoQuizService.notesIncorrect,
      notesAttempted: this._pianoQuizService.notesAttempted,
      octavesCorrect: this._pianoQuizService.octavesCorrect,
      octavesIncorrect: this._pianoQuizService.octavesIncorrect,
      octavesAttempted: this._pianoQuizService.octavesAttempted,
      uid: this._authenticationService.userId
    });
    this.db.object('/quizzes/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname + '/Piano-Note-Identification-Quiz').set({
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._pianoQuizService.total * 100).toFixed(0),
      notesCorrect: this._pianoQuizService.notesCorrect,
      notesIncorrect: this._pianoQuizService.notesIncorrect,
      notesAttempted: this._pianoQuizService.notesAttempted,
      octavesCorrect: this._pianoQuizService.octavesCorrect,
      octavesIncorrect: this._pianoQuizService.octavesIncorrect,
      octavesAttempted: this._pianoQuizService.octavesAttempted,
      uid: this._authenticationService.userId
    });

  }

  submitScore(): void {
    if (this._pianoQuizService.notesCorrect < 0 || this._pianoQuizService.octavesCorrect < 0) {
      this.verify = 'This quiz cannot be submitted until you have 20 correct notes AND 20 correct octaves. Please click close then continue with the quiz or click reset to start over.';
    } else {
      this.timeElapsed = document.getElementById('timer').innerHTML;
      this.attemptDate = (new Date()).toString();
      this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname + '/quizScores/Piano-Note-Identification-Quiz').take(1);
      this.currentUser.subscribe(data => {
          if (data.$exists) {
            if (this._pianoQuizService.total <= (data.total / 100)) {
              this.verify = 'This quiz will not be submitted since you have previously submitted it with the same or higher score.';
            } else if (this._pianoQuizService.total > (data.total / 100) && this._pianoQuizService.total < .9) {
              this.update();
              this.verify = 'This quiz has been submitted, but a passing score of 90% should be achieved prior to moving on. Please click close then continue until you reach 90% to resubmit or click reset to start over';
            } else {
              this.update();
              this.verify = 'Congratulations! You have passed this quiz and your score will be submitted. Please click close and continue on to the next lesson.';
            }
          } else {
            this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname + '/quizScores').take(1);
            this.currentUser.subscribe(data => {
              if (data.$exists) {
                this.currentUser.set({
                  'Piano-Note-Identification-Quiz': {
                    dateTimeSubmitted: new Date().toLocaleString(),
                    timeElapsed: this.timeElapsed,
                    total: (this._pianoQuizService.total * 100).toFixed(0),
                    notesCorrect: this._pianoQuizService.notesCorrect,
                    notesIncorrect: this._pianoQuizService.notesIncorrect,
                    notesAttempted: this._pianoQuizService.notesAttempted,
                    octavesCorrect: this._pianoQuizService.octavesCorrect,
                    octavesIncorrect: this._pianoQuizService.octavesIncorrect,
                    octavesAttempted: this._pianoQuizService.octavesAttempted,
                    uid: this._authenticationService.userId
                  }
                });
                if (this._pianoQuizService.total < .9) {
                  this.verify = 'This quiz has been submitted, but a passing score of 90% should be achieved prior to moving on. Please click close then continue until you reach 90% to resubmit or click reset to start over';
                } else {
                  this.verify = 'Congratulations! You have passed this quiz and your score will be submitted. Please click close and continue on to the next lesson.';
                }
              } else {
                this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname).take(1);
                this.currentUser.set({
                  quizScores: {
                    'Piano-Note-Identification-Quiz': {
                      dateTimeSubmitted: new Date().toLocaleString(),
                      timeElapsed: this.timeElapsed,
                      total: (this._pianoQuizService.total * 100).toFixed(0),
                      notesCorrect: this._pianoQuizService.notesCorrect,
                      notesIncorrect: this._pianoQuizService.notesIncorrect,
                      notesAttempted: this._pianoQuizService.notesAttempted,
                      octavesCorrect: this._pianoQuizService.octavesCorrect,
                      octavesIncorrect: this._pianoQuizService.octavesIncorrect,
                      octavesAttempted: this._pianoQuizService.octavesAttempted,
                      uid: this._authenticationService.userId
                    }
                  }
                });
                if (this._pianoQuizService.total < .9) {
                  this.verify = 'This quiz has been submitted, but a passing score of 90% should be achieved prior to moving on. Please click close then continue until you reach 90% to resubmit or click reset to start over';
                } else {
                  this.verify = 'Congratulations! You have passed this quiz and your score will be submitted. Please click close and continue on to the next lesson.';
                }
              }
            });
          }
        }
      );
      this.quizSet();
    }
  }
}


