import {Injectable} from '@angular/core';
import {NoteNamesInfo} from './note-names-info';

@Injectable()
export class NoteNamesService {
  getNoteNamesOptions() {
    return NoteNamesInfo;
  }
}
