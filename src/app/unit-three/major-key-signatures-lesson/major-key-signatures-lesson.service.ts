import {Injectable} from '@angular/core';

import {Lesson} from '../../lesson';
import {MajorKeySignaturesLessonInfo} from './major-key-signatures-lesson-info';

@Injectable()
export class MajorKeySignaturesLessonService {
  getMajorKeySignaturesLesson(): Lesson[] {
    return MajorKeySignaturesLessonInfo;
  }
}
