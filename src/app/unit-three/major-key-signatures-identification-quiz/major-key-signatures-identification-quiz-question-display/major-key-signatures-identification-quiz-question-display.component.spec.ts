import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesIdentificationQuizQuestionDisplayComponent } from './major-key-signatures-identification-quiz-question-display.component';

describe('MajorKeySignaturesIdentificationQuizQuestionDisplayComponent', () => {
  let component: MajorKeySignaturesIdentificationQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<MajorKeySignaturesIdentificationQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesIdentificationQuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesIdentificationQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
