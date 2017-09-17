import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesConstructionQuizQuestionDisplayComponent } from './minor-key-signatures-construction-quiz-question-display.component';

describe('MinorKeySignaturesConstructionQuizQuestionDisplayComponent', () => {
  let component: MinorKeySignaturesConstructionQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<MinorKeySignaturesConstructionQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesConstructionQuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesConstructionQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
