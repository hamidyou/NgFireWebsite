import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';
import {AuthenticationService} from '../../../authentication.service';
import {MinorKeySignaturesConstructionQuizService} from '../minor-key-signatures-construction-quiz.service';

@Injectable()
export class MinorKeySignaturesConstructionQuizSubmitService {
  postUnderQuiz: FirebaseListObservable<any[]>;
  postUnderLastName: FirebaseListObservable<any[]>;
  private user: FirebaseObjectObservable<any>;
  private currentUser: any;
  private userFile: any;
  public timeElapsed: any;
  public attemptDate: any;
  public verify: string;
  public passed: boolean;

  constructor(private db: AngularFireDatabase, public _authenticationService: AuthenticationService, public _minorKeySignaturesConstructionQuizService: MinorKeySignaturesConstructionQuizService) {
    this.user = db.object('users/all', {preserveSnapshot: true});
    this.user.subscribe(data => {
      this.userFile = data.child(this._authenticationService.userId).val();
    });
    this.passed = this._minorKeySignaturesConstructionQuizService.total >= .9;
  }

  update(): void {
    this.currentUser.update({
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._minorKeySignaturesConstructionQuizService.total * 100).toFixed(0),
      keysCorrect: this._minorKeySignaturesConstructionQuizService.keysCorrect,
      keysIncorrect: this._minorKeySignaturesConstructionQuizService.keysIncorrect,
      keysAttempted: this._minorKeySignaturesConstructionQuizService.keysAttempted,
    });
  }

  quizSet(): void {
    const postData = {
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._minorKeySignaturesConstructionQuizService.total * 100).toFixed(0),
      keysCorrect: this._minorKeySignaturesConstructionQuizService.keysCorrect,
      keysIncorrect: this._minorKeySignaturesConstructionQuizService.keysIncorrect,
      keysAttempted: this._minorKeySignaturesConstructionQuizService.keysAttempted,
      uid: this._authenticationService.userId
    };

    this.postUnderQuiz = this.db.list('quizzes/MinorKeySignaturesConstructionQuiz/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname);

    this.postUnderLastName = this.db.list('/quizzes/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname + '/' + 'MinorKeySignaturesConstructionQuiz');

    this.postUnderQuiz.push(postData);
    this.postUnderLastName.push(postData);
  }

  submitScore(): void {
    if (this._minorKeySignaturesConstructionQuizService.keysCorrect < 8) {
      this.verify = 'This quiz cannot be submitted until you have 8 correct keys. Please click close then continue with the quiz or click reset to start over.';
    } else {
      this.timeElapsed = document.getElementById('timer').innerHTML;
      this.attemptDate = (new Date()).toString();
      this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname + '/quizScores/MinorKeySignaturesConstructionQuiz').take(1);
      this.currentUser.subscribe(data => {
          if (data.$exists) {
            if (this._minorKeySignaturesConstructionQuizService.total <= (data.total / 100)) {
              this.verify = 'You have previously submitted this quiz with the same or higher score.';
            } else if (this._minorKeySignaturesConstructionQuizService.total > (data.total / 100) && this._minorKeySignaturesConstructionQuizService.total < .9) {
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
                  'MinorKeySignaturesConstructionQuiz': {
                    dateTimeSubmitted: new Date().toLocaleString(),
                    timeElapsed: this.timeElapsed,
                    total: (this._minorKeySignaturesConstructionQuizService.total * 100).toFixed(0),
                    keysCorrect: this._minorKeySignaturesConstructionQuizService.keysCorrect,
                    keysIncorrect: this._minorKeySignaturesConstructionQuizService.keysIncorrect,
                    keysAttempted: this._minorKeySignaturesConstructionQuizService.keysAttempted,
                    uid: this._authenticationService.userId
                  }
                });
                if (this._minorKeySignaturesConstructionQuizService.total < .9) {
                  this.verify = 'This quiz has been submitted, but a passing score of 90% should be achieved prior to moving on. Please click close then continue until you reach 90% to resubmit or click reset to start over';
                } else {
                  this.verify = 'Congratulations! You have passed this quiz and your score will be submitted. Please click close and continue on to the next lesson.';
                }
              } else {
                this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname).take(1);
                this.currentUser.set({
                  quizScores: {
                    'MinorKeySignaturesConstructionQuiz': {
                      dateTimeSubmitted: new Date().toLocaleString(),
                      timeElapsed: this.timeElapsed,
                      total: (this._minorKeySignaturesConstructionQuizService.total * 100).toFixed(0),
                      keysCorrect: this._minorKeySignaturesConstructionQuizService.keysCorrect,
                      keysIncorrect: this._minorKeySignaturesConstructionQuizService.keysIncorrect,
                      keysAttempted: this._minorKeySignaturesConstructionQuizService.keysAttempted,
                      uid: this._authenticationService.userId
                    }
                  }
                });
                if (this._minorKeySignaturesConstructionQuizService.total < .9) {
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

