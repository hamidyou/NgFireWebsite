import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntervalIdentificationQuizzesScoringComponent} from './interval-identification-quizzes-scoring.component';

describe('IntervalIdentificationQuizzesScoringComponent', () => {
  let component: IntervalIdentificationQuizzesScoringComponent;
  let fixture: ComponentFixture<IntervalIdentificationQuizzesScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalIdentificationQuizzesScoringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalIdentificationQuizzesScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
