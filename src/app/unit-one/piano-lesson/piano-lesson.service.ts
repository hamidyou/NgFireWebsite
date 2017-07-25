import { Injectable } from '@angular/core';

import { PianoLesson } from './piano-lesson';
import { PianoLessonInfo } from './piano-lesson-info';

@Injectable()
export class PianoLessonService {
  getPianoLesson(): PianoLesson[] {
    return PianoLessonInfo;
  }
}
