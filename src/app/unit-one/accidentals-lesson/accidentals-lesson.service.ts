import { Injectable } from '@angular/core';

import { AccidentalsLessons } from './accidentals-lessons';
import {Lesson} from '../../lesson';

@Injectable()
export class AccidentalsLessonService {
  getAccidentalsLessons(): Lesson[] {
    return AccidentalsLessons;
  }
}
