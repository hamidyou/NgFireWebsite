import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorScalesQuizQuestionDisplayComponent } from './minor-scales-quiz-question-display.component';

describe('MinorScalesQuizQuestionDisplayComponent', () => {
  let component: MinorScalesQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<MinorScalesQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorScalesQuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorScalesQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
