import { Injectable } from '@angular/core';

import {Lesson} from '../../lesson';
import {ScaleDegreesLessonInfo} from './scale-degrees-lesson-info';

@Injectable()
export class ScaleDegreesLessonService {
  getScaleDegreesLessons(): Lesson[] {
    return ScaleDegreesLessonInfo;
  }

}
