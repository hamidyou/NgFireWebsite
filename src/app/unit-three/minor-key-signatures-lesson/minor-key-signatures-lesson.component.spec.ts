import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesLessonComponent } from './minor-key-signatures-lesson.component';

describe('MinorKeySignaturesLessonComponent', () => {
  let component: MinorKeySignaturesLessonComponent;
  let fixture: ComponentFixture<MinorKeySignaturesLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
