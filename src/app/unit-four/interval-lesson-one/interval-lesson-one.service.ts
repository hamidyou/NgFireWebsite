import {Injectable} from '@angular/core';

import {Lesson} from '../../lesson';
import {IntervalLessonOneInfo} from './interval-lesson-one-info';

@Injectable()
export class IntervalLessonOneService {
  getIntervalLessonOne(): Lesson[] {
    return IntervalLessonOneInfo;
  }
}
