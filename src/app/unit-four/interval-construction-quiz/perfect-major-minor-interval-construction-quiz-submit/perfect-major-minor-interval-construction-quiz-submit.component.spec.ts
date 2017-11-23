import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PerfectMajorMinorIntervalConstructionQuizSubmitComponent} from './perfect-major-minor-interval-construction-quiz-submit.component';

describe('PerfectMajorMinorIntervalConstructionQuizSubmitComponent', () => {
  let component: PerfectMajorMinorIntervalConstructionQuizSubmitComponent;
  let fixture: ComponentFixture<PerfectMajorMinorIntervalConstructionQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerfectMajorMinorIntervalConstructionQuizSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectMajorMinorIntervalConstructionQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
