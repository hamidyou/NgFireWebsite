import {Injectable} from '@angular/core';
import {NoteNamesService} from '../../note-names.service';

@Injectable()
export class RootPositionTriadIdentificationQuizService {
  public noteNames;
  public correctRoot: boolean;
  public correctThird: boolean;
  public correctFifth: boolean;
  public wrongAnswer: boolean;
  public checkMark: boolean;
  public hideAnswer: boolean;
  public rootsCorrect: number;
  public rootsIncorrect: number;
  public rootsAttempted: number;
  public thirdsCorrect: number;
  public thirdsIncorrect: number;
  public thirdsAttempted: number;
  public fifthsCorrect: number;
  public fifthsIncorrect: number;
  public fifthsAttempted: number;
  public triadsAttempted: number;
  public total: number;
  public quizTitle: string;

  constructor(private _noteNamesService: NoteNamesService) {
  }

}
