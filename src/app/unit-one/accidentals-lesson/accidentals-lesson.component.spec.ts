import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentalsLessonComponent } from './accidentals-lesson.component';

describe('AccidentalsLessonComponent', () => {
  let component: AccidentalsLessonComponent;
  let fixture: ComponentFixture<AccidentalsLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentalsLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentalsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
