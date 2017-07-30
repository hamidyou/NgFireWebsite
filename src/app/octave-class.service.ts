import { Injectable } from '@angular/core';

@Injectable()
export class OctaveClassService {
  octaveClass: any = [0, 1,  2, 3,  4, 5,  6, 7,  8];

  getOctaveClassOptions(): void {
    return this.octaveClass;
  }

}
