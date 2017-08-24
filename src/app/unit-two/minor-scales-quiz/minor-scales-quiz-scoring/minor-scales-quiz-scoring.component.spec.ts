import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorScalesQuizScoringComponent } from './minor-scales-quiz-scoring.component';

describe('MinorScalesQuizScoringComponent', () => {
  let component: MinorScalesQuizScoringComponent;
  let fixture: ComponentFixture<MinorScalesQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorScalesQuizScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorScalesQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
