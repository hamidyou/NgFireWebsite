import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleIdentificationQuizScoringComponent } from './scale-identification-quiz-scoring.component';

describe('ScaleIdentificationQuizScoringComponent', () => {
  let component: ScaleIdentificationQuizScoringComponent;
  let fixture: ComponentFixture<ScaleIdentificationQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleIdentificationQuizScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleIdentificationQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
