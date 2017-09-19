import {Component, OnInit} from '@angular/core';

import {IntervalLessonOneService} from './interval-lesson-one.service';

@Component({
  selector: 'app-interval-lesson-one',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./interval-lesson-one.component.css'],
  providers: [IntervalLessonOneService]
})
export class IntervalLessonOneComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Intervals - Part 1';
  unit = 'unit-four';

  constructor(private _intervalLessonOneService: IntervalLessonOneService) {
  }

  getIntervalLessonOne(): void {
    this.lessons = this._intervalLessonOneService.getIntervalLessonOne();
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
