import {Component, OnInit} from '@angular/core';

import {IntervalLessonThreeService} from './interval-lesson-three.service';

@Component({
  selector: 'app-interval-lesson-three',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./interval-lesson-three.component.css'],
  providers: [IntervalLessonThreeService]
})
export class IntervalLessonThreeComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Intervals - Part 2';
  unit = 'unit-four';

  constructor(private _intervalLessonThreeService: IntervalLessonThreeService) {
  }

  getIntervalLessonThree(): void {
    this.lessons = this._intervalLessonThreeService.getIntervalLessonThree();
    this.current = this.lessons[0];
  }

  ngOnInit(): void {
    this.getIntervalLessonThree();
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
