import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesConstructionQuizAnswerOptionsComponent } from './minor-key-signatures-construction-quiz-answer-options.component';

describe('MinorKeySignaturesConstructionQuizAnswerOptionsComponent', () => {
  let component: MinorKeySignaturesConstructionQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<MinorKeySignaturesConstructionQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesConstructionQuizAnswerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesConstructionQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
