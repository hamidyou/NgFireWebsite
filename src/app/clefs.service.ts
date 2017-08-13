import { Injectable } from '@angular/core';

@Injectable()
export class ClefsService {
  public clefOptions: any = ['Alto Clef', 'Bass Clef', 'Tenor Clef', 'Treble Clef'];

  getClefOptions(): void {
    return this.clefOptions;
  }

}
