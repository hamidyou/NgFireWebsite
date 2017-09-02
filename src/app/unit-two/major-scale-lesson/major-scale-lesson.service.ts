import {Injectable} from '@angular/core';

import {Lesson} from '../../lesson';
import {MajorScaleLessonInfo} from './major-scale-lesson-info';

@Injectable()
export class MajorScaleLessonService {
  getMajorScaleLesson(): Lesson[] {
    return MajorScaleLessonInfo;
  }
}
