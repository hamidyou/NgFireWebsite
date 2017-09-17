import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesConstructionQuizScoringComponent } from './minor-key-signatures-construction-quiz-scoring.component';

describe('MinorKeySignaturesConstructionQuizScoringComponent', () => {
  let component: MinorKeySignaturesConstructionQuizScoringComponent;
  let fixture: ComponentFixture<MinorKeySignaturesConstructionQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesConstructionQuizScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesConstructionQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
