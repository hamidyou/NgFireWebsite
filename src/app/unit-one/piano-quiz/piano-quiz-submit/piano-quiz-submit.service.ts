import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthenticationService} from '../../../authentication.service';
import {PianoQuizService} from '../piano-quiz.service';

@Injectable()
export class PianoQuizSubmitService {
  private user: FirebaseObjectObservable<any>;
  private currentUser: any;
  private userFile: any;
  public timeElapsed: any;
  public attemptDate: any;

  constructor(private db: AngularFireDatabase, public _authenticationService: AuthenticationService, public _pianoQuizService: PianoQuizService) {
    this.user = db.object('users/all', {preserveSnapshot: true});
    this.user.subscribe(data => {
      this.userFile = data.child(this._authenticationService.userId).val();
    });
  }

  submitScore(): void {
    this.timeElapsed = document.getElementById('timer').innerHTML;
    this.attemptDate = (new Date()).toString();
    this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname + '/quizScores/PianoNoteIdentificationQuiz');
      this.currentUser.subscribe(data => {
      if (data.$exists) {
        this.currentUser.update({
          dateTimeSubmitted: new Date().toLocaleString(),
          timeElapsed: this.timeElapsed,
          total: this._pianoQuizService.total,
          notesCorrect: this._pianoQuizService.notesCorrect,
          notesIncorrect: this._pianoQuizService.notesIncorrect,
          notesAttempted: this._pianoQuizService.notesAttempted,
          octavesCorrect: this._pianoQuizService.octavesCorrect,
          octavesIncorrect: this._pianoQuizService.octavesIncorrect,
          octavesAttempted: this._pianoQuizService.octavesAttempted
        });
      } else {
        this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname + '/quizScores');
          this.currentUser.subscribe(data => {
          if (data.$exists) {
            this.currentUser.set({
              PianoNoteIdentificationQuiz: {
                dateTimeSubmitted: Date.now(),
                timeElapsed: this.timeElapsed,
                total: this._pianoQuizService.total,
                notesCorrect: this._pianoQuizService.notesCorrect,
                notesIncorrect: this._pianoQuizService.notesIncorrect,
                notesAttempted: this._pianoQuizService.notesAttempted,
                octavesCorrect: this._pianoQuizService.octavesCorrect,
                octavesIncorrect: this._pianoQuizService.octavesIncorrect,
                octavesAttempted: this._pianoQuizService.octavesAttempted
              }
            });
          } else {
            this.currentUser = this.db.object('users/' + this.userFile.school + '/' + this.userFile.program + '/' + this.userFile.lastname + this.userFile.firstname);
            this.currentUser.set({
              quizScores: {
                PianoNoteIdentificationQuiz: {
                  dateTimeSubmitted: Date.now(),
                  timeElapsed: this.timeElapsed,
                  total: this._pianoQuizService.total,
                  notesCorrect: this._pianoQuizService.notesCorrect,
                  notesIncorrect: this._pianoQuizService.notesIncorrect,
                  notesAttempted: this._pianoQuizService.notesAttempted,
                  octavesCorrect: this._pianoQuizService.octavesCorrect,
                  octavesIncorrect: this._pianoQuizService.octavesIncorrect,
                  octavesAttempted: this._pianoQuizService.octavesAttempted
                }
              }
            });
          }
        });
      }
    });
  }
}

