import {Component, OnInit} from '@angular/core';

import {MajorScaleLessonService} from './major-scale-lesson.service';

@Component({
  selector: 'app-major-scale-lesson',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./major-scale-lesson.component.css'],
  providers: [MajorScaleLessonService]
})
export class MajorScaleLessonComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Major Scale';
  unit = 'unit-two';

  constructor(private _majorScaleLessonService: MajorScaleLessonService) {
  }

  getLessons(): void {
    this.lessons = this._majorScaleLessonService.getMajorScaleLesson();
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
