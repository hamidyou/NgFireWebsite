import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesConstructionQuizScoringComponent } from './major-key-signatures-construction-quiz-scoring.component';

describe('MajorKeySignaturesConstructionQuizScoringComponent', () => {
  let component: MajorKeySignaturesConstructionQuizScoringComponent;
  let fixture: ComponentFixture<MajorKeySignaturesConstructionQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesConstructionQuizScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesConstructionQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
