import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesIdentificationQuizScoringComponent } from './minor-key-signatures-identification-quiz-scoring.component';

describe('MinorKeySignaturesIdentificationQuizScoringComponent', () => {
  let component: MinorKeySignaturesIdentificationQuizScoringComponent;
  let fixture: ComponentFixture<MinorKeySignaturesIdentificationQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesIdentificationQuizScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesIdentificationQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
