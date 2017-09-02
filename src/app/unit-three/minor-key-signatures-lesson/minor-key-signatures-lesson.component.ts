import { Component, OnInit } from '@angular/core';

import {MinorKeySignaturesLessonService} from './minor-key-signatures-lesson.service';

@Component({
  selector: 'app-minor-key-signatures-lesson',
  templateUrl: '../../lesson-template.html',
  styleUrls: ['./minor-key-signatures-lesson.component.css'],
  providers: [MinorKeySignaturesLessonService]
})
export class MinorKeySignaturesLessonComponent implements OnInit {
  current: any;
  lessons: any;
  lesson = 'Minor Key Signatures';
  unit = 'unit-three';

  constructor(private _minorKeySignaturesLessonService: MinorKeySignaturesLessonService) { }

  getMinorKeySignaturesLesson(): void {
    this.lessons = this._minorKeySignaturesLessonService.getMinorKeySignaturesLesson();
    this.current = this.lessons[0];
  }

  ngOnInit(): void {
    this.getMinorKeySignaturesLesson();
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
