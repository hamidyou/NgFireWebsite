import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PerfectMajorIntervalConstructionQuizSubmitComponent} from './perfect-major-interval-construction-quiz-submit.component';

describe('PerfectMajorIntervalConstructionQuizSubmitComponent', () => {
  let component: PerfectMajorIntervalConstructionQuizSubmitComponent;
  let fixture: ComponentFixture<PerfectMajorIntervalConstructionQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerfectMajorIntervalConstructionQuizSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectMajorIntervalConstructionQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
