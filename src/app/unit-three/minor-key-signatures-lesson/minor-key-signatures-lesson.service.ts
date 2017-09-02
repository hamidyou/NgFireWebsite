import {Injectable} from '@angular/core';

import {Lesson} from '../../lesson';
import {MinorKeySignaturesLessonInfo} from './minor-key-signatures-lesson-info';

@Injectable()
export class MinorKeySignaturesLessonService {
  getMinorKeySignaturesLesson(): Lesson[] {
    return MinorKeySignaturesLessonInfo;
  }
}
