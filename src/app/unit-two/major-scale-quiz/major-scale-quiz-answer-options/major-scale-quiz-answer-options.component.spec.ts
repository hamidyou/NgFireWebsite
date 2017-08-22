import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorScaleQuizAnswerOptionsComponent } from './major-scale-quiz-answer-options.component';

describe('MajorScaleQuizAnswerOptionsComponent', () => {
  let component: MajorScaleQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<MajorScaleQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorScaleQuizAnswerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorScaleQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
