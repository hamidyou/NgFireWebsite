import { Injectable } from '@angular/core';

import {Lesson} from '../../lesson';
import {MinorScaleLessonInfo} from './minor-scale-lesson-info';

@Injectable()
export class MinorScaleLessonService {
  getMinorScaleLesson(): Lesson[] {
    return MinorScaleLessonInfo;
  }
}
