import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesConstructionQuizAnswerOptionsComponent } from './major-key-signatures-construction-quiz-answer-options.component';

describe('MajorKeySignaturesConstructionQuizAnswerOptionsComponent', () => {
  let component: MajorKeySignaturesConstructionQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<MajorKeySignaturesConstructionQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesConstructionQuizAnswerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesConstructionQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
