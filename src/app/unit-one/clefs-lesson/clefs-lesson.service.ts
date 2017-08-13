import { Injectable } from '@angular/core';
import { Lesson } from '../../lesson';
import {ClefsLesson} from './clefs-lesson';

@Injectable()
export class ClefsLessonService {
  getClefsLesson(): Lesson[] {
    return ClefsLesson;
  }
}
