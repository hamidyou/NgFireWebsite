import { Component, OnInit } from '@angular/core';
import {MajorKeySignaturesLessonService} from './major-key-signatures-lesson.service';

@Component({
  selector: 'app-major-key-signatures-lesson',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./major-key-signatures-lesson.component.css'],
  providers: [MajorKeySignaturesLessonService]
})
export class MajorKeySignaturesLessonComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Major Key Signatures';
  unit = 'unit-three';

  constructor(private _majorKeySignaturesLessonService: MajorKeySignaturesLessonService) { }

  getMajorKeySignaturesLesson(): void {
    this.lessons = this._majorKeySignaturesLessonService.getMajorKeySignaturesLesson();
    this.current = this.lessons[0];
  }

  ngOnInit(): void {
    this.getMajorKeySignaturesLesson();
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
