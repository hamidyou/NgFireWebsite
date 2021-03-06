import {Component, OnInit} from '@angular/core';

import {PianoLessonService} from './piano-lesson.service';

@Component({
  selector: 'app-piano-lesson',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./piano-lesson.component.css'],
  providers: [PianoLessonService]
})
export class PianoLessonComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Piano Note Identification';

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


