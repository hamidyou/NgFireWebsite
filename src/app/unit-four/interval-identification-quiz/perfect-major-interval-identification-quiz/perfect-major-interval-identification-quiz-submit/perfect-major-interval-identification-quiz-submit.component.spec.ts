import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PerfectMajorIntervalIdentificationQuizSubmitComponent} from './perfect-major-interval-identification-quiz-submit.component';

describe('PerfectMajorIntervalIdentificationQuizSubmitComponent', () => {
  let component: PerfectMajorIntervalIdentificationQuizSubmitComponent;
  let fixture: ComponentFixture<PerfectMajorIntervalIdentificationQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerfectMajorIntervalIdentificationQuizSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectMajorIntervalIdentificationQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
