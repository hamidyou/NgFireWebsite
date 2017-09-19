import {Injectable} from '@angular/core';

import {Lesson} from '../../lesson';
import {IntervalLessonTwoInfo} from './interval-lesson-two-info';

@Injectable()
export class IntervalLessonTwoService {
  getIntervalLessonTwo(): Lesson[] {
    return IntervalLessonTwoInfo;
  }
}
