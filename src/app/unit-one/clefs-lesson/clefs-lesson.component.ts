import { Component, OnInit } from '@angular/core';
import {ClefsLessonService} from './clefs-lesson.service';

@Component({
  selector: 'app-clefs-lesson',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./clefs-lesson.component.css'],
  providers: [ClefsLessonService]
})
export class ClefsLessonComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Clefs, Staff, & Note Identification';

  constructor(private _clefsLessonService: ClefsLessonService) {
  }

  getLessons(): void {
    this.lessons = this._clefsLessonService.getClefsLesson();
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
