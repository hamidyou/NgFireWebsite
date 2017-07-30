import {Component, OnInit} from '@angular/core';

import {PianoLesson} from './piano-lesson';
import {PianoLessonService} from './piano-lesson.service';

@Component({
  selector: 'app-piano-lesson',
  templateUrl: './piano-lesson.component.html',
  styleUrls: ['./piano-lesson.component.css']
})
export class PianoLessonComponent implements OnInit {
  current: any;
  lessons: any;

  constructor(private _PianoLessonsService: PianoLessonService) {
  }

  getLessons(): void {
    this.lessons = this._PianoLessonsService.getPianoLesson();
    this.current = this.lessons[0];
  }

  ngOnInit(): void {
    this.getLessons();
  }

  getIndex(currentIndex, shift): number {
    const len = this.lessons.length - 1;
    return (((currentIndex + shift) + len) % len);
  }

  next(): void {
    const i = this.getIndex(this.current.index, 1);
    this.current = this.lessons[i];
  }

  previous(): void {
    const i = this.getIndex(this.current.index, -1);
    this.current = this.lessons[i];
  }
}


