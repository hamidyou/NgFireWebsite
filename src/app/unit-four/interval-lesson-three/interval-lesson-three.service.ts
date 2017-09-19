import {Injectable} from '@angular/core';

import {Lesson} from '../../lesson';
import {IntervalLessonThreeInfo} from './interval-lesson-three-info';

@Injectable()
export class IntervalLessonThreeService {
  getIntervalLessonThree(): Lesson[] {
    return IntervalLessonThreeInfo;
  }
}
