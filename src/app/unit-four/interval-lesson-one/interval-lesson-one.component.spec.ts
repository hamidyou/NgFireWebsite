import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntervalLessonOneComponent} from './interval-lesson-one.component';

describe('IntervalLessonOneComponent', () => {
  let component: IntervalLessonOneComponent;
  let fixture: ComponentFixture<IntervalLessonOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalLessonOneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalLessonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
