import {Injectable} from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthenticationService} from '../../../authentication.service';
import {IntervalConstructionQuizService} from '../interval-construction-quiz.service';


@Injectable()
export class PerfectMajorMinorIntervalConstructionQuizSubmitService {
  postUnderQuiz: FirebaseListObservable<any[]>;
  postUnderLastName: FirebaseListObservable<any[]>;
  private user: FirebaseObjectObservable<any>;
  private currentUser: any;
  private userFile: any;
  public timeElapsed: any;
  public attemptDate: any;
  public verify: string;
  public passed: boolean;

  constructor(private db: AngularFireDatabase, public _authenticationService: AuthenticationService, public _IntervalConstructionQuizService: IntervalConstructionQuizService) {
    this.user = db.object('users/all', {preserveSnapshot: true});
    this.user.subscribe(data => {
      this.userFile = data.child(this._authenticationService.userId).val();
    });
    this.passed = this._IntervalConstructionQuizService.total >= .9;
  }

  update(): void {
    this.currentUser.update({
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._IntervalConstructionQuizService.total * 100).toFixed(0),
      answerNotesAttempted: this._IntervalConstructionQuizService.answerNotesAttempted,
      answerNotesCorrect: this._IntervalConstructionQuizService.answerNotesCorrect,
      answerNotesIncorrect: this._IntervalConstructionQuizService.answerNotesIncorrect,
      intervalsAttempted: this._IntervalConstructionQuizService.intervalsAttempted,
    });
  }

  quizSet(): void {
    const postData = {
      dateTimeSubmitted: new Date().toLocaleString(),
      timeElapsed: this.timeElapsed,
      total: (this._IntervalConstructionQuizService.total * 100).toFixed(0),
      answerNotesAttempted: this._IntervalConstructionQuizService.answerNotesAttempted,
      answerNotesCorrect: this._IntervalConstructionQuizService.answerNotesCorrect,
      answerNotesIncorrect: this._IntervalConstructionQuizService.answerNotesIncorrect,
      intervalsAttempted: this._IntervalConstructionQuizService.intervalsAttempted,
      uid: this._authenticationService.userId
    };

    this.postUnderQuiz = this.db.list('quizzes/PerfectMajorMinorIntervalConstructionQuiz/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname);

    this.postUnderLastName = this.db.list('/quizzes/' + this.userFile.school + '/' + this.userFile.lastname + this.userFile.firstname + '/' + 'PerfectMajorMinorIntervalConstructionQuiz');

    this.postUnderQuiz.push(postData);
    this.postUnderLastName.push(postData);
  }

  submitScore(): void {
    if (this._IntervalConstructionQuizService.answerNotesCorrect < 15) {
      this.verify = 'This quiz cannot be submitted until you have 10 answers correct. Please click' +
        ' close then continue with the quiz or click reset to start over.';
    } else {
      this.timeElapsed = document.getElementById('timer').innerHTML;
      this.attemptDate = (new Date()).toString();
      this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname + '/quizScores/PerfectMajorMinorIntervalConstructionQuiz').take(1);
      this.currentUser.subscribe(data => {
          if (data.$exists) {
            if (this._IntervalConstructionQuizService.total <= (data.total / 100)) {
              this.verify = 'You have previously submitted this quiz with the same or higher score.';
            } else if (this._IntervalConstructionQuizService.total > (data.total / 100) && this._IntervalConstructionQuizService.total < .9) {
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
                  'PerfectMajorMinorIntervalConstructionQuiz': {
                    dateTimeSubmitted: new Date().toLocaleString(),
                    timeElapsed: this.timeElapsed,
                    total: (this._IntervalConstructionQuizService.total * 100).toFixed(0),
                    answerNotesAttempted: this._IntervalConstructionQuizService.answerNotesAttempted,
                    answerNotesCorrect: this._IntervalConstructionQuizService.answerNotesCorrect,
                    answerNotesIncorrect: this._IntervalConstructionQuizService.answerNotesIncorrect,
                    intervalsAttempted: this._IntervalConstructionQuizService.intervalsAttempted,
                    uid: this._authenticationService.userId
                  }
                });
                if (this._IntervalConstructionQuizService.total < .9) {
                  this.verify = 'This quiz has been submitted, but a passing score of 90% should be achieved prior to moving on. Please click close then continue until you reach 90% to resubmit or click reset to start over';
                } else {
                  this.verify = 'Congratulations! You have passed this quiz and your score will be submitted. Please click close and continue on to the next lesson.';
                }
              } else {
                this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname).take(1);
                this.currentUser.set({
                  quizScores: {
                    'PerfectMajorMinorIntervalConstructionQuiz': {
                      dateTimeSubmitted: new Date().toLocaleString(),
                      timeElapsed: this.timeElapsed,
                      total: (this._IntervalConstructionQuizService.total * 100).toFixed(0),
                      answerNotesAttempted: this._IntervalConstructionQuizService.answerNotesAttempted,
                      answerNotesCorrect: this._IntervalConstructionQuizService.answerNotesCorrect,
                      answerNotesIncorrect: this._IntervalConstructionQuizService.answerNotesIncorrect,
                      intervalsAttempted: this._IntervalConstructionQuizService.intervalsAttempted,
                      uid: this._authenticationService.userId
                    }
                  }
                });
                if (this._IntervalConstructionQuizService.total < .9) {
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
