import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoLessonComponent } from './piano-lesson.component';

describe('PianoLessonComponent', () => {
  let component: PianoLessonComponent;
  let fixture: ComponentFixture<PianoLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
