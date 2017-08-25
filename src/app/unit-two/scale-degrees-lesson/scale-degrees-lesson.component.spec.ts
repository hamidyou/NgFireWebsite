import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleDegreesLessonComponent } from './scale-degrees-lesson.component';

describe('ScaleDegreesLessonComponent', () => {
  let component: ScaleDegreesLessonComponent;
  let fixture: ComponentFixture<ScaleDegreesLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleDegreesLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleDegreesLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
