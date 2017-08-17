import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorScaleLessonComponent } from './major-scale-lesson.component';

describe('MajorScaleLessonComponent', () => {
  let component: MajorScaleLessonComponent;
  let fixture: ComponentFixture<MajorScaleLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorScaleLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorScaleLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
