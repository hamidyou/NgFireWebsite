import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesIdentificationQuizScoringComponent } from './major-key-signatures-identification-quiz-scoring.component';

describe('MajorKeySignaturesIdentificationQuizScoringComponent', () => {
  let component: MajorKeySignaturesIdentificationQuizScoringComponent;
  let fixture: ComponentFixture<MajorKeySignaturesIdentificationQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesIdentificationQuizScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesIdentificationQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
