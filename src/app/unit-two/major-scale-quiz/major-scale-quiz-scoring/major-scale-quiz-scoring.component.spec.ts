import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorScaleQuizScoringComponent } from './major-scale-quiz-scoring.component';

describe('MajorScaleQuizScoringComponent', () => {
  let component: MajorScaleQuizScoringComponent;
  let fixture: ComponentFixture<MajorScaleQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorScaleQuizScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorScaleQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
