import { Component, OnInit } from '@angular/core';
import {ScaleDegreesLessonService} from './scale-degrees-lesson.service';

@Component({
  selector: 'app-scale-degrees-lesson',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./scale-degrees-lesson.component.css'],
  providers: [ScaleDegreesLessonService]
})
export class ScaleDegreesLessonComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Scale Degrees';
  unit = 'unit-two';

  constructor(private _scaleDegreesLessonService: ScaleDegreesLessonService) { }

  getLessons(): void {
    this.lessons = this._scaleDegreesLessonService.getScaleDegreesLessons();
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
