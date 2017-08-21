import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorScaleQuizQuestionDisplayComponent } from './major-scale-quiz-question-display.component';

describe('MajorScaleQuizQuestionDisplayComponent', () => {
  let component: MajorScaleQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<MajorScaleQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorScaleQuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorScaleQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
