import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleIdentificationQuizQuestionDisplayComponent } from './scale-identification-quiz-question-display.component';

describe('ScaleIdentificationQuizQuestionDisplayComponent', () => {
  let component: ScaleIdentificationQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<ScaleIdentificationQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleIdentificationQuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleIdentificationQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
