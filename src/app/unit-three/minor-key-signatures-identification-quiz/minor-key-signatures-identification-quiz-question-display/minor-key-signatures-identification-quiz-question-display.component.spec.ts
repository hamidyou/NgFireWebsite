import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesIdentificationQuizQuestionDisplayComponent } from './minor-key-signatures-identification-quiz-question-display.component';

describe('MinorKeySignaturesIdentificationQuizQuestionDisplayComponent', () => {
  let component: MinorKeySignaturesIdentificationQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<MinorKeySignaturesIdentificationQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesIdentificationQuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesIdentificationQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
