import {Component, OnInit} from '@angular/core';

import {RootPositionTriadsLessonService} from './root-position-triads-lesson.service';

@Component({
  selector: 'app-root-position-triads-lesson',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./root-position-triads-lesson.component.css'],
  providers: [RootPositionTriadsLessonService]
})
export class RootPositionTriadsLessonComponent implements OnInit {

  current: any;
  lessons: any;
  lesson = 'Root Position Triads';
  unit = 'unit-five';

  constructor(private _rootPositionTriadsLessonService: RootPositionTriadsLessonService) {
  }

  getIntervalLessonOne(): void {
    this.lessons = this._rootPositionTriadsLessonService.getRootPositionTriadsLesson();
    this.current = this.lessons[0];
  }

  ngOnInit(): void {
    this.getIntervalLessonOne();
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
