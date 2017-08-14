import {Component, OnInit} from '@angular/core';

import {AccidentalsLessonService} from './accidentals-lesson.service';

@Component({
  selector: 'app-accidentals-lesson',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./accidentals-lesson.component.css'],
  providers: [AccidentalsLessonService]
})
export class AccidentalsLessonComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Accidentals';
  unit = 'unit-one';

  constructor(public _accidentalLessonService: AccidentalsLessonService) {
  }

  getAccidentalsLessons(): void {
    this.lessons = this._accidentalLessonService.getAccidentalsLessons();
    this.current = this.lessons[0];
  }

  ngOnInit() {
    this.getAccidentalsLessons();
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
