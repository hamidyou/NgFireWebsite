import { Injectable } from '@angular/core';
import {OctaveClassService} from '../../octave-class.service';
import {NoteNamesService} from '../../note-names.service';

@Injectable()
export class PianoQuizAnswerOptionsService {
  public octaveClass: any;
  public noteNames: any;

  constructor(private _OctaveClassService: OctaveClassService, private _NoteNamesService: NoteNamesService) { }

  getOctaveClassOptions(): void {
    this.octaveClass = this._OctaveClassService.getOctaveClassOptions();
  }

  getNoteNamesOptions(): void {
    this.noteNames = this._NoteNamesService.getNoteNamesOptions();
  }

}
