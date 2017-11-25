import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RootPositionTriadsLessonComponent} from './root-position-triads-lesson.component';

describe('RootPositionTriadsLessonComponent', () => {
  let component: RootPositionTriadsLessonComponent;
  let fixture: ComponentFixture<RootPositionTriadsLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootPositionTriadsLessonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPositionTriadsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
