import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import 'rxjs/add/operator/take';
import {AuthenticationService} from '../../../authentication.service';
import {NoteQuizService} from '../note-quiz.service';

@Injectable()
export class NoteQuizSubmitService {
  private user: FirebaseObjectObservable<any>;
  private currentUser: any;
  private userFile: any;
  public timeElapsed: any;
  public attemptDate: any;
  public verify: string;
  public passed: boolean;
  public x: string;

  constructor(private db: AngularFireDatabase, public _authenticationService: AuthenticationService, public _noteQuizService: NoteQuizService) {
    this.user = db.object('users/all', {preserveSnapshot: true});
    this.user.subscribe(data => {
      this.userFile = data.child(this._authenticationService.userId).val();
    });
    this.passed = this._noteQuizService.total >= .9;
  }

  update(): void {
    this.currentUser.update({
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._noteQuizService.total * 100).toFixed(0),
      notesCorrect: this._noteQuizService.notesCorrect,
      notesIncorrect: this._noteQuizService.notesIncorrect,
      notesAttempted: this._noteQuizService.notesAttempted,
      octavesCorrect: this._noteQuizService.octavesCorrect,
      octavesIncorrect: this._noteQuizService.octavesIncorrect,
      octavesAttempted: this._noteQuizService.octavesAttempted
    });
  }

  quizSet(): void {
    this.db.list('quizzes/NoteIdentificationQuiz/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname).push({
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._noteQuizService.total * 100).toFixed(0),
      notesCorrect: this._noteQuizService.notesCorrect,
      notesIncorrect: this._noteQuizService.notesIncorrect,
      notesAttempted: this._noteQuizService.notesAttempted,
      octavesCorrect: this._noteQuizService.octavesCorrect,
      octavesIncorrect: this._noteQuizService.octavesIncorrect,
      octavesAttempted: this._noteQuizService.octavesAttempted,
      uid: this._authenticationService.userId
    });
    this.db.list('/quizzes/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname).push({
      NoteIdentificationQuiz: {
        dateTimeSubmitted: new Date().toLocaleString(),
        timeElapsed: this.timeElapsed,
        total: (this._noteQuizService.total * 100).toFixed(0),
        notesCorrect: this._noteQuizService.notesCorrect,
        notesIncorrect: this._noteQuizService.notesIncorrect,
        notesAttempted: this._noteQuizService.notesAttempted,
        octavesCorrect: this._noteQuizService.octavesCorrect,
        octavesIncorrect: this._noteQuizService.octavesIncorrect,
        octavesAttempted: this._noteQuizService.octavesAttempted,
        uid: this._authenticationService.userId
      }
    });

  }

  submitScore(): void {
    if (this._noteQuizService.notesCorrect < 0 || this._noteQuizService.octavesCorrect < 0) {
      this.verify = 'This quiz cannot be submitted until you have 20 correct notes AND 20 correct octaves. Please click close then continue with the quiz or click reset to start over.';
    } else {
      this.timeElapsed = document.getElementById('timer').innerHTML;
      this.attemptDate = (new Date()).toString();
      this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname + '/quizScores/NoteIdentificationQuiz').take(1);
      this.currentUser.subscribe(data => {
          if (data.$exists) {
            if (this._noteQuizService.total <= (data.total / 100)) {
              this.verify = 'This quiz will not be submitted since you have previously submitted it with the same or higher score.';
            } else if (this._noteQuizService.total > (data.total / 100) && this._noteQuizService.total < .9) {
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
                    total: (this._noteQuizService.total * 100).toFixed(0),
                    notesCorrect: this._noteQuizService.notesCorrect,
                    notesIncorrect: this._noteQuizService.notesIncorrect,
                    notesAttempted: this._noteQuizService.notesAttempted,
                    octavesCorrect: this._noteQuizService.octavesCorrect,
                    octavesIncorrect: this._noteQuizService.octavesIncorrect,
                    octavesAttempted: this._noteQuizService.octavesAttempted,
                    uid: this._authenticationService.userId
                  }
                });
                if (this._noteQuizService.total < .9) {
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
                      total: (this._noteQuizService.total * 100).toFixed(0),
                      notesCorrect: this._noteQuizService.notesCorrect,
                      notesIncorrect: this._noteQuizService.notesIncorrect,
                      notesAttempted: this._noteQuizService.notesAttempted,
                      octavesCorrect: this._noteQuizService.octavesCorrect,
                      octavesIncorrect: this._noteQuizService.octavesIncorrect,
                      octavesAttempted: this._noteQuizService.octavesAttempted,
                      uid: this._authenticationService.userId
                    }
                  }
                });
                if (this._noteQuizService.total < .9) {
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
