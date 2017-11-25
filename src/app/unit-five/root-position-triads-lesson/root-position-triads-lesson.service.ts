import {Injectable} from '@angular/core';

import {RootPositionTriadsLessonInfo} from './root-position-triads-lesson-info';
import {Lesson} from '../../lesson';


@Injectable()
export class RootPositionTriadsLessonService {
  getRootPositionTriadsLesson(): Lesson[] {
    return RootPositionTriadsLessonInfo;
  }
}
