import { Component, OnInit } from '@angular/core';

import {MinorScaleLessonService} from './minor-scale-lesson.service';

@Component({
  selector: 'app-minor-scale-lesson',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./minor-scale-lesson.component.css'],
  providers: [MinorScaleLessonService]
})
export class MinorScaleLessonComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Minor Scale';
  unit = 'unit-two';

  constructor(private _minorScaleLessonService: MinorScaleLessonService) { }

  getLessons(): void {
    this.lessons = this._minorScaleLessonService.getMinorScaleLesson();
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
