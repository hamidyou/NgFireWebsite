import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MinorKeySignaturesIdentificationQuizAnswerOptionsComponent} from './minor-key-signatures-identification-quiz-answer-options.component';

describe('MinorKeySignaturesIdentificationQuizAnswerOptionsComponent', () => {
  let component: MinorKeySignaturesIdentificationQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<MinorKeySignaturesIdentificationQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MinorKeySignaturesIdentificationQuizAnswerOptionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesIdentificationQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
