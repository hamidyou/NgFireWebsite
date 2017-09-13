import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesConstructionQuizQuestionDisplayComponent } from './major-key-signatures-construction-quiz-question-display.component';

describe('MajorKeySignaturesConstructionQuizQuestionDisplayComponent', () => {
  let component: MajorKeySignaturesConstructionQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<MajorKeySignaturesConstructionQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesConstructionQuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesConstructionQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
