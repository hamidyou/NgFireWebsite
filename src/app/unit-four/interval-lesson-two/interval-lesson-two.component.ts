import {Component, OnInit} from '@angular/core';

import {IntervalLessonTwoService} from './interval-lesson-two.service';

@Component({
  selector: 'app-interval-lesson-two',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./interval-lesson-two.component.css'],
  providers: [IntervalLessonTwoService]
})
export class IntervalLessonTwoComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Intervals - Part 2';
  unit = 'unit-four';

  constructor(private _intervalLessonTwoService: IntervalLessonTwoService) {
  }

  getIntervalLessonTwo(): void {
    this.lessons = this._intervalLessonTwoService.getIntervalLessonTwo();
    this.current = this.lessons[0];
  }

  ngOnInit(): void {
    this.getIntervalLessonTwo();
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
