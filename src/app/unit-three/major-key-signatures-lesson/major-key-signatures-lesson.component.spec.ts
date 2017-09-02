import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesLessonComponent } from './major-key-signatures-lesson.component';

describe('MajorKeySignaturesLessonComponent', () => {
  let component: MajorKeySignaturesLessonComponent;
  let fixture: ComponentFixture<MajorKeySignaturesLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
