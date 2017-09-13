import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MajorKeySignaturesIdentificationQuizAnswerOptionsComponent} from './major-key-signatures-identification-quiz-answer-options.component';

describe('MajorKeySignaturesIdentificationQuizAnswerOptionsComponent', () => {
  let component: MajorKeySignaturesIdentificationQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<MajorKeySignaturesIdentificationQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MajorKeySignaturesIdentificationQuizAnswerOptionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesIdentificationQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
