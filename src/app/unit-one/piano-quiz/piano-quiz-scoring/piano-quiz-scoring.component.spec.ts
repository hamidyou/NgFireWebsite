import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoQuizScoringComponent } from './piano-quiz-scoring.component';

describe('PianoQuizScoringComponent', () => {
  let component: PianoQuizScoringComponent;
  let fixture: ComponentFixture<PianoQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoQuizScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
