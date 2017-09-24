import {Injectable} from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthenticationService} from '../../../../authentication.service';

import {IntervalIdentificationQuizzesService} from '../../interval-identification-quizzes.service';

@Injectable()
export class PerfectMajorIntervalIdentificationQuizSubmitService {
  postUnderQuiz: FirebaseListObservable<any[]>;
  postUnderLastName: FirebaseListObservable<any[]>;
  private user: FirebaseObjectObservable<any>;
  private currentUser: any;
  private userFile: any;
  public timeElapsed: any;
  public attemptDate: any;
  public verify: string;
  public passed: boolean;

  constructor(private db: AngularFireDatabase, public _authenticationService: AuthenticationService, public _intervalIdentificationQuizzesService: IntervalIdentificationQuizzesService) {
    this.user = db.object('users/all', {preserveSnapshot: true});
    this.user.subscribe(data => {
      this.userFile = data.child(this._authenticationService.userId).val();
    });
    this.passed = this._intervalIdentificationQuizzesService.total >= .9;
  }

  update(): void {
    this.currentUser.update({
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._intervalIdentificationQuizzesService.total * 100).toFixed(0),
      quantitiesAttempted: this._intervalIdentificationQuizzesService.quantitiesAttempted,
      quantitiesCorrect: this._intervalIdentificationQuizzesService.quantitiesCorrect,
      quantitiesIncorrect: this._intervalIdentificationQuizzesService.quantitiesIncorrect,
      qualitiesAttempted: this._intervalIdentificationQuizzesService.qualitiesAttempted,
      qualitiesCorrect: this._intervalIdentificationQuizzesService.qualitiesCorrect,
      qualitiesIncorrect: this._intervalIdentificationQuizzesService.qualitiesIncorrect,
      intervalsAttempted: this._intervalIdentificationQuizzesService.intervalsAttempted,
    });
  }

  quizSet(): void {
    const postData = {
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._intervalIdentificationQuizzesService.total * 100).toFixed(0),
      quantitiesAttempted: this._intervalIdentificationQuizzesService.quantitiesAttempted,
      quantitiesCorrect: this._intervalIdentificationQuizzesService.quantitiesCorrect,
      quantitiesIncorrect: this._intervalIdentificationQuizzesService.quantitiesIncorrect,
      qualitiesAttempted: this._intervalIdentificationQuizzesService.qualitiesAttempted,
      qualitiesCorrect: this._intervalIdentificationQuizzesService.qualitiesCorrect,
      qualitiesIncorrect: this._intervalIdentificationQuizzesService.qualitiesIncorrect,
      intervalsAttempted: this._intervalIdentificationQuizzesService.intervalsAttempted,
      uid: this._authenticationService.userId
    };

    this.postUnderQuiz = this.db.list('quizzes/PerfectMajorIntervalIdentificationQuiz/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname);

    this.postUnderLastName = this.db.list('/quizzes/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname + '/' + 'PerfectMajorIntervalIdentificationQuiz');

    this.postUnderQuiz.push(postData);
    this.postUnderLastName.push(postData);
  }

  submitScore(): void {
    if (this._intervalIdentificationQuizzesService.qualitiesCorrect < 10) {
      this.verify = 'This quiz cannot be submitted until you have 10 quantities and qualities correct. Please click' +
        ' close then continue with the quiz or click reset to start over.';
    } else {
      this.timeElapsed = document.getElementById('timer').innerHTML;
      this.attemptDate = (new Date()).toString();
      this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname + '/quizScores/PerfectMajorIntervalIdentificationQuiz').take(1);
      this.currentUser.subscribe(data => {
          if (data.$exists) {
            if (this._intervalIdentificationQuizzesService.total <= (data.total / 100)) {
              this.verify = 'You have previously submitted this quiz with the same or higher score.';
            } else if (this._intervalIdentificationQuizzesService.total > (data.total / 100) && this._intervalIdentificationQuizzesService.total < .9) {
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
                  'PerfectMajorIntervalIdentificationQuiz': {
                    dateTimeSubmitted: new Date().toLocaleString(),
                    timeElapsed: this.timeElapsed,
                    total: (this._intervalIdentificationQuizzesService.total * 100).toFixed(0),
                    quantitiesAttempted: this._intervalIdentificationQuizzesService.quantitiesAttempted,
                    quantitiesCorrect: this._intervalIdentificationQuizzesService.quantitiesCorrect,
                    quantitiesIncorrect: this._intervalIdentificationQuizzesService.quantitiesIncorrect,
                    qualitiesAttempted: this._intervalIdentificationQuizzesService.qualitiesAttempted,
                    qualitiesCorrect: this._intervalIdentificationQuizzesService.qualitiesCorrect,
                    qualitiesIncorrect: this._intervalIdentificationQuizzesService.qualitiesIncorrect,
                    intervalsAttempted: this._intervalIdentificationQuizzesService.intervalsAttempted,
                    uid: this._authenticationService.userId
                  }
                });
                if (this._intervalIdentificationQuizzesService.total < .9) {
                  this.verify = 'This quiz has been submitted, but a passing score of 90% should be achieved prior to moving on. Please click close then continue until you reach 90% to resubmit or click reset to start over';
                } else {
                  this.verify = 'Congratulations! You have passed this quiz and your score will be submitted. Please click close and continue on to the next lesson.';
                }
              } else {
                this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname).take(1);
                this.currentUser.set({
                  quizScores: {
                    'PerfectMajorIntervalIdentificationQuiz': {
                      dateTimeSubmitted: new Date().toLocaleString(),
                      timeElapsed: this.timeElapsed,
                      total: (this._intervalIdentificationQuizzesService.total * 100).toFixed(0),
                      quantitiesAttempted: this._intervalIdentificationQuizzesService.quantitiesAttempted,
                      quantitiesCorrect: this._intervalIdentificationQuizzesService.quantitiesCorrect,
                      quantitiesIncorrect: this._intervalIdentificationQuizzesService.quantitiesIncorrect,
                      qualitiesAttempted: this._intervalIdentificationQuizzesService.qualitiesAttempted,
                      qualitiesCorrect: this._intervalIdentificationQuizzesService.qualitiesCorrect,
                      qualitiesIncorrect: this._intervalIdentificationQuizzesService.qualitiesIncorrect,
                      intervalsAttempted: this._intervalIdentificationQuizzesService.intervalsAttempted,
                      uid: this._authenticationService.userId
                    }
                  }
                });
                if (this._intervalIdentificationQuizzesService.total < .9) {
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
