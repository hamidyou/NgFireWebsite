import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PerfectMajorMinorIntervalIdentificationQuizSubmitComponent} from './perfect-major-minor-interval-identification-quiz-submit.component';

describe('PerfectMajorMinorIntervalIdentificationQuizSubmitComponent', () => {
  let component: PerfectMajorMinorIntervalIdentificationQuizSubmitComponent;
  let fixture: ComponentFixture<PerfectMajorMinorIntervalIdentificationQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerfectMajorMinorIntervalIdentificationQuizSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectMajorMinorIntervalIdentificationQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
