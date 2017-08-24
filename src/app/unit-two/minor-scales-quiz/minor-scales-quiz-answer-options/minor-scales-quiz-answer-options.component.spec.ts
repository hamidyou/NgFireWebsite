import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorScalesQuizAnswerOptionsComponent } from './minor-scales-quiz-answer-options.component';

describe('MinorScalesQuizAnswerOptionsComponent', () => {
  let component: MinorScalesQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<MinorScalesQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorScalesQuizAnswerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorScalesQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
