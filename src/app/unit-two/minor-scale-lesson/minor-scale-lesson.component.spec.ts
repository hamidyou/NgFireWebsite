import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorScaleLessonComponent } from './minor-scale-lesson.component';

describe('MinorScaleLessonComponent', () => {
  let component: MinorScaleLessonComponent;
  let fixture: ComponentFixture<MinorScaleLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorScaleLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorScaleLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
